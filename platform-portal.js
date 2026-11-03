const profileKey = 'ly_student_profile';
const messagesKey = 'ly_teacher_messages';
const courseProgressKey = 'ly_course_progress';
const courseActivityKey = 'ly_course_activity';

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    credentials: 'same-origin'
  });
  const data = await response.json().catch(() => ({ error: 'Unexpected server response.' }));
  if (!response.ok) throw new Error(data.error || 'Request failed.');
  return data;
}

function simpleDemoHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}

function loadStored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; }
}

function loadStoredArray(key, fallback = []) {
  const value = loadStored(key, fallback);
  return Array.isArray(value) ? value : fallback;
}

async function saveProfile(event) {
  event.preventDefault();
  try {
    const result = await apiRequest('/api/profile', { method: 'PUT', body: JSON.stringify({ name: document.getElementById('studentName').value.trim() }) });
    const profile = { name: result.user.name, email: result.user.email, updatedAt: new Date().toISOString() };
    localStorage.setItem(profileKey, JSON.stringify(profile));
    document.getElementById('profileFeedback').textContent = 'Profile saved.';
  } catch (error) { document.getElementById('profileFeedback').textContent = error.message; }
}

async function submitTeacherRequest(event) {
  event.preventDefault();
  try {
    await apiRequest('/api/messages', { method: 'POST', body: JSON.stringify({ subject: document.getElementById('helpSubject').value, message: document.getElementById('helpMessage').value.trim() }) });
    event.target.reset();
    document.getElementById('helpFeedback').textContent = 'Your message was sent to the teacher.';
    await renderServerMessages();
  } catch (error) { document.getElementById('helpFeedback').textContent = error.message; }
}

async function renderServerMessages() {
  const container = document.getElementById('studentMessageList');
  if (!container) return;
  try {
    const { messages } = await apiRequest('/api/messages');
    if (!messages.length) { container.innerHTML = '<p class="subtle">No help requests yet.</p>'; return; }
    container.innerHTML = messages.slice(0, 5).map((item) => `<article class="message-item"><strong>${escapeText(item.subject)}</strong><p>${escapeText(item.message)}</p><small>${new Date(item.createdAt).toLocaleString()}</small><p class="teacher-reply">${item.reply ? `Teacher reply: ${escapeText(item.reply)}` : 'Waiting for a teacher reply.'}</p></article>`).join('');
  } catch (error) {
    container.innerHTML = `<p class="subtle">${escapeText(error.message)}</p>`;
  }
}

function renderStudentMessages() {
  const container = document.getElementById('studentMessageList');
  if (!container) return;
  const messages = loadStoredArray(messagesKey).filter((item) => {
    const profile = loadStored(profileKey, {});
    return !profile.email || !item.email || item.email === profile.email;
  }).slice(-5).reverse();
  if (!messages.length) {
    container.innerHTML = '<p class="subtle">No help requests yet.</p>';
    return;
  }
  container.innerHTML = messages.map((item) => `
    <article class="message-item"><strong>${escapeText(item.subject)}</strong><p>${escapeText(item.message)}</p>
      <small>${new Date(item.createdAt).toLocaleString()}</small>
      <p class="teacher-reply">${item.reply ? `Teacher reply: ${escapeText(item.reply)}` : 'Waiting for a teacher reply.'}</p>
    </article>`).join('');
}

function renderStudentCourseProgress() {
  if (!document.getElementById('studentCourseProgress')) return;
  const progress = loadStored(courseProgressKey, {});
  [['ai', 'Ai'], ['web', 'Web'], ['it', 'It']].forEach(([key, suffix]) => {
    const completed = Object.values(progress[key] || {}).filter((chapter) => chapter.completed).length;
    const totals = { ai: 20, web: 24, it: 12 };
    document.getElementById(`student${suffix}Progress`).textContent = `${completed} / ${totals[key]} chapters`;
    document.getElementById(`student${suffix}Bar`).style.width = `${Math.round(completed / totals[key] * 100)}%`;
  });
  const practiced = loadStored('ly_hsk_dialogue_progress', []).filter((item) => !item.startsWith('vocab:')).length;
  const dialogueCount = 24;
  document.getElementById('studentDialogueProgress').textContent = `${practiced} turns practiced`;
  document.getElementById('studentDialogueBar').style.width = `${Math.min(100, Math.round(practiced / dialogueCount * 100))}%`;
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderAdminPanel() {
  const profile = loadStored(profileKey, {});
  const activity = loadStoredArray(courseActivityKey);
  const progress = loadStored(courseProgressKey, {});
  const messages = loadStoredArray(messagesKey);
  const hskTests = loadStoredArray('ly_hsk_quiz_history');
  const learnedWords = loadStoredArray('ly_hsk_known_words');
  const unmatchedHskTests = hskTests.filter((test) => !activity.some((item) =>
    item.chapterId === 'vocabulary-test' && new Date(item.at).getTime() === new Date(test.date).getTime()
  )).map((test) => ({
    course: 'HSK vocabulary', chapter: `${test.score}% (${test.correct}/${test.total})`, date: test.date, passed: test.score >= 70
  }));
  const allActivity = [...activity.map((item) => ({ ...item, date: item.at })), ...unmatchedHskTests];
  const completedLessons = Object.values(progress).reduce((total, course) =>
    total + Object.values(course || {}).filter((chapter) => chapter.completed).length, 0);
  document.getElementById('adminStudentCount').textContent = profile.name || profile.email ? '1' : '0';
  document.getElementById('adminLessonCount').textContent = completedLessons;
  document.getElementById('adminAssessmentCount').textContent = allActivity.length;
  document.getElementById('adminHelpCount').textContent = messages.filter((item) => !item.reply).length;

  const learner = document.getElementById('learnerReport');
  if (profile.name || profile.email) {
    learner.innerHTML = `<article class="learner-row"><div><strong>${escapeText(profile.name || 'Learner')}</strong><span>${escapeText(profile.email || 'Local profile')}</span></div><div><strong>${completedLessons}</strong><span>chapters passed</span></div><div><strong>${learnedWords.length} / 300</strong><span>Chinese words learned</span></div><div><strong>${hskTests.length}</strong><span>Chinese tests</span></div></article>`;
  } else {
    learner.innerHTML = '<p class="subtle">No learner profile exists in this browser yet. A learner can create one from the student dashboard.</p>';
  }

  const recent = allActivity
    .sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 20);
  const activityList = document.getElementById('activityReport');
  activityList.innerHTML = recent.length ? recent.map((item) => `
    <tr><td>${escapeText(item.course || 'Learning activity')}</td><td>${escapeText(item.chapter || 'Practice')}</td><td>${item.passed === false ? 'Retry needed' : 'Completed'}</td><td>${new Date(item.date).toLocaleString()}</td></tr>`).join('') : '<tr><td colspan="4">No study activity recorded in this browser yet.</td></tr>';

  renderHelpInbox(messages);
}

function renderHelpInbox(messages = loadStored(messagesKey, [])) {
  const inbox = document.getElementById('teacherInbox');
  if (!inbox) return;
  if (!messages.length) {
    inbox.innerHTML = '<p class="subtle">No student requests yet.</p>';
    return;
  }
  inbox.innerHTML = messages.slice().reverse().map((item) => `
    <article class="teacher-ticket"><div class="ticket-meta"><strong>${escapeText(item.name)}</strong><span>${new Date(item.createdAt).toLocaleString()}</span></div>
      <p class="ticket-subject">${escapeText(item.subject)}</p><p>${escapeText(item.message)}</p>
      ${item.reply ? `<p class="teacher-reply">Your reply: ${escapeText(item.reply)}</p>` : ''}
      <form class="reply-form" data-reply-id="${escapeText(item.id)}"><label>Teacher reply<textarea name="reply" required>${escapeText(item.reply || '')}</textarea></label><button class="primary-btn" type="submit">${item.reply ? 'Update reply' : 'Send reply'}</button></form>
    </article>`).join('');
  inbox.querySelectorAll('.reply-form').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const current = loadStored(messagesKey, []);
    const target = current.find((item) => item.id === form.dataset.replyId);
    if (!target) return;
    target.reply = new FormData(form).get('reply').toString().trim();
    target.repliedAt = new Date().toISOString();
    localStorage.setItem(messagesKey, JSON.stringify(current));
    renderHelpInbox(current);
    document.getElementById('adminHelpCount').textContent = current.filter((item) => !item.reply).length;
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const certificateButton = document.getElementById('generateCertificate');
  if (certificateButton) certificateButton.addEventListener('click', () => {
    const profile = loadStored(profileKey, { name: 'Student' });
    const certificate = `LI YI HANG LEARNING CERTIFICATE\n\nThis certificate recognizes ${profile.name || 'Student'} for demonstrating learning progress and completing assessed coursework on the platform.\n\nIssued locally: ${new Date().toLocaleDateString()}\nAuthorized by: Li Yi Hang Learning\n\nThis browser certificate is a learning record prototype and requires server verification before official use.`;
    const blob = new Blob([certificate], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'li-yi-hang-learning-certificate.txt'; link.click(); URL.revokeObjectURL(url);
  });
  const historyButton = document.getElementById('exportStudentHistory');
  if (historyButton) historyButton.addEventListener('click', () => {
    const history = loadStoredArray('lyhang_test_history');
    const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'student-test-history.json'; link.click(); URL.revokeObjectURL(url);
  });
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const feedback = document.getElementById('registrationFeedback');
      feedback.textContent = 'Creating account…';
      try {
        const result = await apiRequest('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify({
            name: document.getElementById('registerName').value.trim(),
            email: document.getElementById('registerEmail').value.trim(),
            password: document.getElementById('registerPassword').value
          })
        });
        localStorage.setItem(profileKey, JSON.stringify({ name: result.user.name, email: result.user.email, updatedAt: new Date().toISOString() }));
        feedback.textContent = 'Account created. Opening dashboard…';
        window.location.href = 'dashboard.html';
      } catch (error) {
        feedback.textContent = error.message;
      }
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const feedback = document.getElementById('loginFeedback');
      feedback.textContent = 'Signing in…';
      try {
        const result = await apiRequest('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email: document.getElementById('loginEmail').value, password: document.getElementById('loginPassword').value })
        });
        localStorage.setItem(profileKey, JSON.stringify({ name: result.user.name, email: result.user.email, updatedAt: new Date().toISOString() }));
        feedback.textContent = 'Login successful. Opening dashboard…';
        window.location.href = result.user.role === 'admin' ? 'admin.html' : 'dashboard.html';
      } catch (error) {
        feedback.textContent = error.message;
      }
    });
    document.getElementById('googleDemo').addEventListener('click', () => {
      document.getElementById('loginFeedback').textContent = 'Google sign-in needs hosting-domain OAuth configuration. Local demo Google access cannot be enabled safely here.';
    });
  }

  document.querySelectorAll('[data-admin-role]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-admin-role]').forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('[data-role-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.rolePanel !== button.dataset.adminRole;
      });
    });
  });

  const exportButton = document.getElementById('exportData');
  if (exportButton) {
    exportButton.addEventListener('click', () => {
      const exportData = {};
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('ly_')) exportData[key] = localStorage.getItem(key);
      });
      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'li-yi-hang-learning-export.json';
      link.click();
      URL.revokeObjectURL(url);
      document.getElementById('developerFeedback').textContent = 'Prototype data exported.';
    });
  }

  const resetButton = document.getElementById('resetDemo');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      if (!window.confirm('Reset all local learner, course, HSK, dialogue, and help data?')) return;
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('ly_')) localStorage.removeItem(key);
      });
      document.getElementById('developerFeedback').textContent = 'Local demo data reset.';
      renderAdminPanel();
    });
  }

  const profileForm = document.getElementById('studentProfileForm');
  if (profileForm) {
    const profile = loadStored(profileKey, {});
    document.getElementById('studentName').value = profile.name || '';
    document.getElementById('studentEmail').value = profile.email || '';
    profileForm.addEventListener('submit', saveProfile);
    document.getElementById('teacherRequestForm').addEventListener('submit', submitTeacherRequest);
    renderServerMessages();
    renderStudentCourseProgress();
    apiRequest('/api/auth/me').then(({ user }) => {
      document.getElementById('studentName').value = user.name || '';
      document.getElementById('studentEmail').value = user.email || '';
      localStorage.setItem(profileKey, JSON.stringify({ name: user.name, email: user.email, updatedAt: new Date().toISOString() }));
    }).catch(() => { window.location.replace('login.html'); });
  }
  if (document.getElementById('adminPanel')) renderAdminPanel();
});
