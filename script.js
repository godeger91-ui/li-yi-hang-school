document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const langToggle = document.getElementById('langToggle');
  const searchInput = document.getElementById('siteSearch');

  const savedTheme = localStorage.getItem('lyhang_theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      const dark = body.classList.contains('dark');
      localStorage.setItem('lyhang_theme', dark ? 'dark' : 'light');
      themeToggle.textContent = dark ? '☀️' : '🌙';
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current = body.dataset.lang === 'zh' ? 'en' : 'zh';
      body.dataset.lang = current;
      localStorage.setItem('lyhang_lang', current);
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach((el) => {
        const key = el.dataset.i18n;
        if (current === 'zh') {
          el.textContent = el.dataset.zh || el.textContent;
        } else {
          el.textContent = el.dataset.en || el.textContent;
        }
      });
      langToggle.textContent = current === 'zh' ? 'EN / 中文' : '中文 / EN';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        const pages = [
          'it-courses.html', 'web-design.html', 'ai-courses.html', 'hsk1.html', 'hsk2.html',
          'online-tests.html', 'resources.html', 'blog.html', 'faq.html'
        ];
        const matched = pages.find((page) => page.toLowerCase().includes(query) || page.toLowerCase().includes(query.replace(/\s+/g, '-')));
        if (matched) {
          window.location.href = matched;
        }
      }
    });
  }

  const dashboardHskProgress = document.getElementById('dashboardHskProgress');
  if (dashboardHskProgress) {
    let knownWords = [];
    let testHistory = [];
    try { knownWords = JSON.parse(localStorage.getItem('ly_hsk_known_words') || '[]'); } catch {}
    try { testHistory = JSON.parse(localStorage.getItem('ly_hsk_quiz_history') || '[]'); } catch {}
    if (!Array.isArray(knownWords)) knownWords = [];
    if (!Array.isArray(testHistory)) testHistory = [];
    const bestScore = Math.max(
      Number(localStorage.getItem('ly_hsk_best_score') || 0),
      testHistory.reduce((best, test) => Math.max(best, test.score), 0)
    );
    const averageScore = testHistory.length
      ? Math.round(testHistory.reduce((total, test) => total + test.score, 0) / testHistory.length)
      : null;
    const knownCount = Math.min(knownWords.length, 300);
    document.getElementById('dashboardHskKnown').textContent = `${knownCount} / 300`;
    document.getElementById('dashboardHskScore').textContent = testHistory.length ? `${bestScore}%` : 'Not tested';
    document.getElementById('dashboardHskAverage').textContent = averageScore === null ? 'Not tested' : `${averageScore}%`;
    document.getElementById('dashboardHskTests').textContent = testHistory.length;
    const learnedPercent = knownCount ? Math.max(1, Math.round(knownCount / 300 * 100)) : 0;
    document.getElementById('dashboardHskBar').style.width = `${learnedPercent}%`;
    const historyList = document.getElementById('hskHistoryList');
    if (testHistory.length) {
      const list = document.createElement('ul');
      list.className = 'list-check';
      testHistory.slice(-5).reverse().forEach((test) => {
        const item = document.createElement('li');
        const date = new Date(test.date).toLocaleDateString();
        item.textContent = `HSK vocabulary test — ${test.score}% (${test.correct}/${test.total}) · ${date}`;
        list.append(item);
      });
      historyList.replaceChildren(list);
    }
  }

  const quizRoot = document.getElementById('quizRoot');
  if (!quizRoot) return;

  const quizQuestions = [
    {
      type: 'mcq',
      question: 'Which HTML tag creates the biggest heading?',
      options: ['<h6>', '<h1>', '<header>', '<heading>'],
      answer: 1,
      explanation: '<h1> is the main top-level heading and should normally appear once per page.'
    },
    {
      type: 'mcq',
      question: 'Which CSS property changes the text color?',
      options: ['background-color', 'color', 'margin', 'display'],
      answer: 1,
      explanation: 'The color property changes the text color in CSS.'
    },
    {
      type: 'bool',
      question: 'A human-readable alt attribute is important for accessibility.',
      options: ['True', 'False'],
      answer: 0,
      explanation: 'Alt text helps users understand images when visuals cannot be seen.'
    },
    {
      type: 'mcq',
      question: 'Which AI activity can best support student revision?',
      options: ['Generating practice questions and explanations', 'Sharing private passwords', 'Copying exams automatically', 'Removing the need for checking'],
      answer: 0,
      explanation: 'AI can generate practice questions and explanations, but students should verify the output and do their own work.'
    },
    {
      type: 'mcq',
      question: 'Which layer is responsible for page styling?',
      options: ['HTML', 'CSS', 'JavaScript', 'Database'],
      answer: 1,
      explanation: 'CSS defines layout, color, spacing, and visual structure.'
    },
    {
      type: 'mcq',
      question: 'Which of the following is a safe digital habit?',
      options: ['Click unknown links without checking', 'Use strong passwords and update software', 'Share your password publically', 'Ignore system updates'],
      answer: 1,
      explanation: 'Strong passwords and regular updates reduce online risk.'
    },
    {
      type: 'mcq',
      question: 'What does HSK 1 focus on?',
      options: ['Advanced Chinese writing', 'Basic everyday vocabulary and phrases', 'Only grammar formulas', 'Business translation'],
      answer: 1,
      explanation: 'HSK 1 focuses on beginner-level vocabulary and basic communication.'
    },
    {
      type: 'bool',
      question: 'CSS Grid is mainly used for page layout and complex design structures.',
      options: ['True', 'False'],
      answer: 0,
      explanation: 'CSS Grid is excellent for overall page layout and two-dimensional positioning.'
    },
    {
      type: 'mcq',
      question: 'Which prompt is most useful for a study review?',
      options: ['Write a story about a robot', 'Explain this topic in simple steps and give 5 practice questions', 'Open the internet browser', 'Delete all notes'],
      answer: 1,
      explanation: 'A strong study prompt asks for explanation and practice in a simple format.'
    },
    {
      type: 'mcq',
      question: 'A good placement test helps students:',
      options: ['Skip all courses', 'Find the right level', 'Avoid practice', 'Increase login time'],
      answer: 1,
      explanation: 'Placement tests guide students to the most suitable level for their skill.'
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  const answers = [];

  function renderQuestion() {
    const q = quizQuestions[currentQuestion];
    const questionBox = document.getElementById('questionBox');
    const progress = document.getElementById('progressBar');
    const qNumber = document.getElementById('questionNumber');
    if (!questionBox || !progress || !qNumber) return;

    qNumber.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    progress.style.width = `${((currentQuestion) / quizQuestions.length) * 100}%`;

    let optionsHtml = '';
    if (q.type === 'mcq' || q.type === 'bool') {
      q.options.forEach((option, index) => {
        optionsHtml += `
          <label>
            <input type="radio" name="answer" value="${index}" />
            <span>${option}</span>
          </label>
        `;
      });
    } else {
      optionsHtml = `<input type="text" id="fillAnswer" placeholder="Type your answer here" />`;
    }

    questionBox.innerHTML = `
      <h3>${q.question}</h3>
      <div class="question-options">${optionsHtml}</div>
    `;
  }

  const nextBtn = document.getElementById('nextQuestion');
  const previousBtn = document.getElementById('previousQuestion');
  if (previousBtn) previousBtn.addEventListener('click', () => {
    if (currentQuestion === 0) return;
    currentQuestion -= 1;
    renderQuestion();
  });
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const q = quizQuestions[currentQuestion];
      let chosen = '';

      if (q.type === 'mcq' || q.type === 'bool') {
        const selected = document.querySelector('input[name="answer"]:checked');
        chosen = selected ? selected.value : null;
      } else {
        const fill = document.getElementById('fillAnswer');
        chosen = fill ? fill.value.trim().toLowerCase() : '';
      }

      if (chosen === '' || chosen === null) {
        alert('Please select or type an answer before continuing.');
        return;
      }

      answers.push({
        question: q.question,
        answer: chosen,
        correct: q.type === 'fill' ? chosen === q.answer.toLowerCase() : Number(chosen) === q.answer,
        explanation: q.explanation
      });

      if (q.type === 'fill') {
        score += 0;
      } else {
        score += Number(chosen) === q.answer ? 1 : 0;
      }

      currentQuestion += 1;
      if (currentQuestion < quizQuestions.length) {
        renderQuestion();
      } else {
        const result = Math.round((score / quizQuestions.length) * 100);
        const summary = document.getElementById('quizSummary');
        const summaryText = document.getElementById('summaryText');
        const scoreText = document.getElementById('scoreText');
        let history = [];
        try { history = JSON.parse(localStorage.getItem('lyhang_test_history') || '[]'); } catch {}
        if (!Array.isArray(history)) history = [];
        history.push({ date: new Date().toLocaleString(), score: result, title: 'Quick practice quiz' });
        localStorage.setItem('lyhang_test_history', JSON.stringify(history.slice(-10)));

        if (summary && summaryText && scoreText) {
          summary.classList.add('show');
          summaryText.innerHTML = answers.map((item, idx) => `
            <li>${idx + 1}. ${item.question}<br><small>${item.correct ? '✔ Correct' : '✘ Incorrect'} — ${item.explanation}</small></li>
          `).join('');
          scoreText.textContent = `${result}% (${score}/${quizQuestions.length})`;
        }

        document.getElementById('questionBox').style.display = 'none';
        nextBtn.style.display = 'none';
      }
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    localStorage.setItem('ly_newsletter_email', email);
    document.getElementById('newsletterFeedback').textContent = 'Subscription saved on this device.';
    newsletterForm.reset();
  });

  renderQuestion();
});
