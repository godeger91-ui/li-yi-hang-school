const params = new URLSearchParams(location.search);
const courseId = params.get('id');
const course = COURSE_CATALOG[courseId];
const escapeOption = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const glossary = {
  IT: [['hardware','Physical computer equipment.'],['software','Programs that instruct a computer.'],['network','Devices that communicate and share resources.'],['backup','A separate copy used to recover data.']],
  'Web Designing': [['HTML','Markup used to structure web content.'],['CSS','Language used to style HTML.'],['JavaScript','Language that adds browser behavior.'],['responsive','Design that adapts to available screen space.']],
  AI: [['AI','Systems that perform tasks associated with intelligence.'],['model','A learned representation used to make predictions.'],['training data','Examples used to teach a machine-learning system.'],['prompt','Instructions supplied to a generative AI system.']]
};

function lessonExplanations(title) {
  const isCodeCourse = course.department === 'Web Designing' && /HTML|CSS|JavaScript/.test(course.title);
  const code = isCodeCourse ? `<div class="code-preview"><pre><code>&lt;main class="course-example"&gt;\n  &lt;h1&gt;${title}&lt;/h1&gt;\n  &lt;p&gt;Build one small example, then inspect the result.&lt;/p&gt;\n&lt;/main&gt;</code></pre><div class="browser-preview"><span class="browser-dots">● ● ●</span><h3>${title}</h3><p>Student practice result appears here.</p></div></div>` : '';
  return `${code}<p>This chapter explains <strong>${title}</strong> from its purpose through the decisions a learner must make in a real project. Begin with the correct terminology, then connect it to a concrete example. For ${course.title}, apply the concept to one small task before increasing the difficulty.</p>
  <p>A strong learning sequence is: observe the example, predict the result, complete the exercise, check the output, and explain one reason it works. Record the steps you used, the problem you encountered, and the correction you made. This is also evidence that you understand the subject, not only that you followed instructions.</p>`;
}

function quizFor(index) {
  const topic = course.lessons[index];
  return {
    question: `What is the best first step when learning “${topic}”?`,
    options: [`Learn the purpose and core terms`, 'Skip practice and memorize every command', 'Avoid checking the result', 'Copy a final project without reading it'],
    answer: 0,
    explanation: 'Understanding purpose and core terms gives you a framework for practice and troubleshooting.'
  };
}

function downloadNotes() {
  const text = `${course.title}\nLi Yi Hang Learning notes\n\n${course.lessons.map((lesson, index) => `${index + 1}. ${lesson}`).join('\n')}\n`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = `${courseId}-notes.txt`; link.click(); URL.revokeObjectURL(url);
}

function renderLesson(index) {
  const lesson = course.lessons[index];
  const progressKey = `course-detail-progress:${courseId}`;
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch {}
  const quiz = quizFor(index);
  document.getElementById('lessonContent').innerHTML = `
    <div class="detail-lesson-head"><div><p class="eyebrow">Lesson ${index + 1} of ${course.lessons.length}</p><h2>${lesson}</h2></div><span class="lesson-completion-badge">${progress[index] ? 'Completed' : 'In progress'}</span></div>
    <figure class="lesson-image"><img src="${course.image}" alt="Students learning ${lesson}" loading="lazy" /><figcaption>Topic illustration · open-source Unsplash image</figcaption></figure>
    <div class="lesson-prose">${lessonExplanations(lesson)}</div>
    <aside class="key-point"><strong>Key point</strong><p>${lesson} becomes easier to remember when you can explain its purpose, use it in a small example, and identify one common mistake.</p></aside>
    <section class="lesson-practice"><h3>Practice exercise</h3><p>Create a one-page or written example for ${lesson}. Label the goal, expected result, result you observed, and one improvement you would make.</p></section>
    <section class="lesson-mcq"><h3>Lesson check</h3><p>${quiz.question}</p><div class="question-options">${quiz.options.map((option, i) => `<label><input type="radio" name="catalogAnswer" value="${i}"><span>${String.fromCharCode(65 + i)}. ${escapeOption(option)}</span></label>`).join('')}</div><button id="checkCatalogLesson" class="primary-btn" type="button">Submit answer</button><p id="catalogLessonFeedback" class="lesson-feedback"></p></section>
    <div class="lesson-navigation"><button id="previousLesson" class="secondary-btn" type="button">Previous lesson</button><button id="nextLesson" class="primary-btn" type="button">${index === course.lessons.length - 1 ? 'Open final exam' : 'Next lesson'}</button></div>`;
  document.getElementById('previousLesson').disabled = index === 0;
  document.getElementById('previousLesson').addEventListener('click', () => renderLesson(index - 1));
  document.getElementById('nextLesson').addEventListener('click', () => index === course.lessons.length - 1 ? renderFinalExam() : renderLesson(index + 1));
  document.getElementById('checkCatalogLesson').addEventListener('click', () => {
    const selected = document.querySelector('input[name="catalogAnswer"]:checked');
    const feedback = document.getElementById('catalogLessonFeedback');
    if (!selected) { feedback.textContent = 'Select one option first.'; return; }
    const passed = Number(selected.value) === quiz.answer;
    feedback.textContent = passed ? `Correct. ${quiz.explanation}` : `Review the lesson. ${quiz.explanation}`;
    if (passed) {
      progress[index] = { score: 100, completedAt: new Date().toISOString() };
      localStorage.setItem(progressKey, JSON.stringify(progress));
      document.querySelector('.lesson-completion-badge').textContent = 'Completed';
      updateCourseProgress(progress);
      recordTest(course.title, lesson, 100, true);
    }
  });
}

function recordTest(courseTitle, lesson, score, passed) {
  let history = [];
  try { history = JSON.parse(localStorage.getItem('lyhang_test_history') || '[]'); } catch {}
  if (!Array.isArray(history)) history = [];
  history.push({ date: new Date().toLocaleString(), score, title: `${courseTitle}: ${lesson}`, passed });
  localStorage.setItem('lyhang_test_history', JSON.stringify(history.slice(-100)));
}

function updateCourseProgress(progress) {
  const completed = Object.keys(progress).length;
  document.getElementById('courseDetailProgress').textContent = `${completed} of ${course.lessons.length} lessons complete`;
  document.getElementById('courseDetailBar').style.width = `${Math.round(completed / course.lessons.length * 100)}%`;
}

function renderFinalExam() {
  const q = quizFor(course.lessons.length - 1);
  document.getElementById('lessonContent').innerHTML = `<section class="final-exam"><p class="eyebrow">Final assessment</p><h2>${course.title} final exam</h2><p>This browser-based MCQ final measures your understanding of the complete course roadmap. Select one answer, submit it, and review the result. Complete lessons first for the strongest preparation.</p><h3>${q.question}</h3><div class="question-options">${q.options.map((option, i) => `<label><input type="radio" name="finalAnswer" value="${i}"><span>${String.fromCharCode(65 + i)}. ${escapeOption(option)}</span></label>`).join('')}</div><button class="primary-btn" id="submitFinalExam" type="button">Submit final exam</button><p id="finalExamFeedback" class="lesson-feedback"></p></section>`;
  document.getElementById('submitFinalExam').addEventListener('click', () => {
    const selected = document.querySelector('input[name="finalAnswer"]:checked');
    if (!selected) { document.getElementById('finalExamFeedback').textContent = 'Choose one answer first.'; return; }
    const passed = Number(selected.value) === q.answer;
    document.getElementById('finalExamFeedback').textContent = passed ? 'Pass. You demonstrated the core course principle.' : `Not yet. ${q.explanation}`;
    recordTest(course.title, 'Final exam', passed ? 100 : 0, passed);
  });
}

if (!course) {
  document.getElementById('courseDetail').innerHTML = '<section class="page-banner"><h1>Course not found</h1><p><a href="course-catalog.html">Return to the catalog</a></p></section>';
} else {
  let progress = {}; try { progress = JSON.parse(localStorage.getItem(`course-detail-progress:${courseId}`) || '{}'); } catch {}
  const departmentGlossary = glossary[course.department === 'AI' ? 'AI' : course.department === 'Web Designing' ? 'Web Designing' : 'IT'];
  document.title = `${course.title} | Li Yi Hang Learning`;
  document.getElementById('courseDetail').innerHTML = `<section class="course-detail-banner"><img src="${course.image}" alt="${course.title} course" /><div><p class="eyebrow">${course.department} · ${course.level}</p><h1>${course.title}</h1><p>${course.description}</p><div class="button-row"><button id="downloadNotes" class="primary-btn" type="button">Download course notes</button><button id="goFirstLesson" class="secondary-btn" type="button">Start lesson 1</button></div><div class="course-detail-progress"><strong id="courseDetailProgress">0 of ${course.lessons.length} lessons complete</strong><div class="progress-bar"><span id="courseDetailBar"></span></div></div></div></section>
    <div class="course-detail-layout"><aside class="course-outline"><h2>Lessons</h2>${course.lessons.map((lesson, index) => `<button type="button" data-detail-lesson="${index}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${lesson}</strong></button>`).join('')}<h2>Glossary</h2><dl>${departmentGlossary.map(([term, definition]) => `<dt>${term}</dt><dd>${definition}</dd>`).join('')}</dl></aside><article id="lessonContent"></article></div>`;
  updateCourseProgress(progress);
  document.getElementById('downloadNotes').addEventListener('click', downloadNotes);
  document.getElementById('goFirstLesson').addEventListener('click', () => renderLesson(0));
  document.querySelectorAll('[data-detail-lesson]').forEach((button) => button.addEventListener('click', () => renderLesson(Number(button.dataset.detailLesson))));
  renderLesson(0);
}
