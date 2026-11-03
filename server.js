'use strict';

const http = require('http');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const crypto = require('crypto');

const root = __dirname;
const dataDir = path.join(root, 'data');
const dataFile = path.join(dataDir, 'learning-platform.json');
const port = Number(process.env.PORT || 3000);
const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const adminEmail = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
const sessions = new Map();

fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify({ users: [], messages: [], progress: {} }, null, 2));

async function readData() {
  try {
    const data = JSON.parse(await fsp.readFile(dataFile, 'utf8'));
    if (!Array.isArray(data.users) || !Array.isArray(data.messages) || !data.progress || typeof data.progress !== 'object') {
      throw new Error('Database has an invalid structure');
    }
    return data;
  }
  catch (error) { throw new Error(`Database unavailable: ${error.message}`); }
}

async function writeData(data) {
  const temporary = `${dataFile}.${process.pid}.tmp`;
  await fsp.writeFile(temporary, JSON.stringify(data, null, 2));
  await fsp.rename(temporary, dataFile);
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `scrypt:${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const parts = String(stored).split(':');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;
  const actual = crypto.scryptSync(password, parts[1], 64);
  const expected = Buffer.from(parts[2], 'hex');
  return expected.length === actual.length && crypto.timingSafeEqual(actual, expected);
}

function send(res, status, value, extraHeaders = {}) {
  const body = JSON.stringify(value);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extraHeaders });
  res.end(body);
}

function parseCookies(header = '') {
  return Object.fromEntries(header.split(';').map((part) => part.trim().split('=')).filter((parts) => parts.length === 2).map(([key, value]) => {
    try { return [key, decodeURIComponent(value)]; }
    catch { return [key, value]; }
  }));
}

async function parseBody(req) {
  let body = '';
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 1_000_000) throw new Error('Request body is too large');
  }
  if (!body) return {};
  const parsed = JSON.parse(body);
  return parsed && typeof parsed === 'object' ? parsed : {};
}

function setSession(res, userId) {
  const id = crypto.randomBytes(32).toString('hex');
  sessions.set(id, { userId, expires: Date.now() + 7 * 24 * 60 * 60 * 1000 });
  res.setHeader('Set-Cookie', `ly_session=${id}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${7 * 24 * 60 * 60}`);
}

function clearSession(req, res) {
  const id = parseCookies(req.headers.cookie).ly_session;
  if (id) sessions.delete(id);
  res.setHeader('Set-Cookie', 'ly_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');
}

async function currentUser(req) {
  const id = parseCookies(req.headers.cookie).ly_session;
  const session = sessions.get(id);
  if (!session || session.expires < Date.now()) {
    if (id) sessions.delete(id);
    return null;
  }
  const data = await readData();
  const user = data.users.find((item) => item.id === session.userId);
  if (!user) return null;
  return { ...user, role: user.email === adminEmail && adminEmail ? 'admin' : user.role || 'student' };
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, focus: user.focus || '', role: user.role || 'student', createdAt: user.createdAt };
}

function requireUser(req, res) {
  return currentUser(req).then((user) => {
    if (!user) { send(res, 401, { error: 'Please sign in.' }); return null; }
    return user;
  });
}

function requireAdmin(req, res) {
  return currentUser(req).then((user) => {
    if (!user) { send(res, 401, { error: 'Please sign in.' }); return null; }
    if (user.role !== 'admin') { send(res, 403, { error: 'Administrator access required.' }); return null; }
    return user;
  });
}

const mimeTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };

async function serveStatic(req, res, pathname) {
  if (pathname === '/') pathname = '/index.html';
  let decodedPathname;
  try { decodedPathname = decodeURIComponent(pathname); }
  catch { return false; }
  const filePath = path.resolve(root, `.${decodedPathname}`);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) return false;
  try {
    const stat = await fsp.stat(filePath);
    if (!stat.isFile() || filePath === dataFile || (filePath.startsWith(`${dataDir}${path.sep}`))) return false;
    res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    if (req.method === 'HEAD') { res.end(); return true; }
    fs.createReadStream(filePath).pipe(res);
    return true;
  } catch { return false; }
}

async function api(req, res, pathname) {
  try {
    if (pathname === '/api/auth/register' && req.method === 'POST') {
      const body = await parseBody(req);
      const name = String(body.name || '').trim().slice(0, 70);
      const email = String(body.email || '').trim().toLowerCase().slice(0, 120);
      const password = String(body.password || '');
      if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) return send(res, 400, { error: 'Enter a valid name, email, and a password of at least 6 characters.' });
      const data = await readData();
      if (data.users.some((user) => user.email === email)) return send(res, 409, { error: 'An account with this email already exists.' });
      const user = { id: crypto.randomUUID(), name, email, passwordHash: hashPassword(password), focus: String(body.focus || ''), role: email === adminEmail && adminEmail ? 'admin' : 'student', createdAt: new Date().toISOString() };
      data.users.push(user);
      await writeData(data);
      setSession(res, user.id);
      return send(res, 201, { user: publicUser(user) });
    }

    if (pathname === '/api/auth/login' && req.method === 'POST') {
      const body = await parseBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const data = await readData();
      const user = data.users.find((item) => item.email === email);
      if (!user || !verifyPassword(String(body.password || ''), user.passwordHash)) return send(res, 401, { error: 'Email or password is incorrect.' });
      setSession(res, user.id);
      return send(res, 200, { user: publicUser({ ...user, role: user.email === adminEmail && adminEmail ? 'admin' : user.role }) });
    }

    if (pathname === '/api/auth/logout' && req.method === 'POST') { clearSession(req, res); return send(res, 200, { ok: true }); }
    if (pathname === '/api/auth/me' && req.method === 'GET') {
      const user = await requireUser(req, res); if (!user) return; return send(res, 200, { user: publicUser(user) });
    }

    if (pathname === '/api/profile' && ['GET', 'PUT'].includes(req.method)) {
      const user = await requireUser(req, res); if (!user) return;
      const data = await readData();
      const stored = data.users.find((item) => item.id === user.id);
      if (req.method === 'PUT') {
        const body = await parseBody(req);
        stored.name = String(body.name || stored.name).trim().slice(0, 70);
        stored.focus = String(body.focus || stored.focus || '').slice(0, 80);
        await writeData(data);
      }
      return send(res, 200, { user: publicUser({ ...stored, role: user.role }) });
    }

    if (pathname === '/api/progress' && ['GET', 'PUT'].includes(req.method)) {
      const user = await requireUser(req, res); if (!user) return;
      const data = await readData();
      if (req.method === 'PUT') { data.progress[user.id] = await parseBody(req); await writeData(data); }
      return send(res, 200, { progress: data.progress[user.id] || {} });
    }

    if (pathname === '/api/messages' && ['GET', 'POST'].includes(req.method)) {
      const user = await requireUser(req, res); if (!user) return;
      const data = await readData();
      if (req.method === 'POST') {
        const body = await parseBody(req);
        const message = { id: crypto.randomUUID(), userId: user.id, name: user.name, email: user.email, subject: String(body.subject || '').slice(0, 120), message: String(body.message || '').trim().slice(0, 1000), createdAt: new Date().toISOString(), reply: '' };
        if (!message.subject || !message.message) return send(res, 400, { error: 'Subject and message are required.' });
        data.messages.push(message);
        await writeData(data);
        return send(res, 201, { message });
      }
      const messages = data.messages.filter((item) => item.userId === user.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      return send(res, 200, { messages });
    }

    if (pathname === '/api/admin/messages' && req.method === 'GET') {
      const admin = await requireAdmin(req, res); if (!admin) return;
      const data = await readData(); return send(res, 200, { messages: data.messages.slice().reverse() });
    }

    if (pathname.startsWith('/api/admin/messages/') && req.method === 'PUT') {
      const admin = await requireAdmin(req, res); if (!admin) return;
      const id = pathname.slice('/api/admin/messages/'.length);
      const body = await parseBody(req);
      const data = await readData();
      const message = data.messages.find((item) => item.id === id);
      if (!message) return send(res, 404, { error: 'Help request not found.' });
      message.reply = String(body.reply || '').trim().slice(0, 1000);
      message.repliedAt = new Date().toISOString();
      await writeData(data);
      return send(res, 200, { message });
    }

    if (pathname === '/api/admin/overview' && req.method === 'GET') {
      const admin = await requireAdmin(req, res); if (!admin) return;
      const data = await readData();
      return send(res, 200, { learners: data.users.filter((user) => user.role !== 'admin').map(publicUser), progress: data.progress, openHelpRequests: data.messages.filter((item) => !item.reply).length });
    }

    return false;
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      send(res, error instanceof SyntaxError ? 400 : 500, { error: error instanceof SyntaxError ? 'Invalid JSON.' : 'Server error.' });
    } else {
      res.end();
    }
    return true;
  }
}

const server = http.createServer(async (req, res) => {
  const pathname = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  if (pathname.startsWith('/api/')) {
    if (await api(req, res, pathname)) return;
    if (!res.headersSent) send(res, 404, { error: 'API endpoint not found.' });
    return;
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, { error: 'Method not allowed.' });
  if (await serveStatic(req, res, pathname)) return;
  send(res, 404, { error: 'Page not found.' });
});

server.listen(port, () => console.log(`Li Yi Hang Learning backend running at http://localhost:${port}`));
