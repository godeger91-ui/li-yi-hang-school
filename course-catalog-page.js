let department = 'All';

function catalogCard(id, course) {
  const lessonCount = course.lessons.length;
  const quizCount = lessonCount + 1;
  return `<article class="catalog-course-card">
    <img src="${course.image}" alt="${course.title} learning course" loading="lazy" />
    <div class="catalog-course-body">
      <div class="catalog-tags"><span>${course.department}</span><span>${course.level}</span></div>
      <h2>${course.title}</h2><p>${course.description}</p>
      <dl class="course-facts"><div><dt>${lessonCount}</dt><dd>Lessons</dd></div><div><dt>${quizCount}</dt><dd>Quizzes</dd></div><div><dt>${course.focus}</dt><dd>Focus</dd></div></dl>
      <a class="primary-btn" href="course-detail.html?id=${encodeURIComponent(id)}">Start course</a>
    </div>
  </article>`;
}

function renderCatalog() {
  const query = document.getElementById('catalogSearch').value.trim().toLowerCase();
  const cards = Object.entries(COURSE_CATALOG).filter(([, course]) =>
    (department === 'All' || course.department === department) &&
    `${course.title} ${course.department} ${course.description} ${course.lessons.join(' ')}`.toLowerCase().includes(query)
  );
  document.getElementById('courseCatalog').innerHTML = cards.length
    ? cards.map(([id, course]) => catalogCard(id, course)).join('')
    : '<div class="card"><h2>No matching course</h2><p>Try a different department or lesson keyword.</p></div>';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('catalogSearch').addEventListener('input', renderCatalog);
  document.querySelectorAll('[data-department]').forEach((button) => button.addEventListener('click', () => {
    department = button.dataset.department;
    document.querySelectorAll('[data-department]').forEach((item) => item.classList.toggle('active', item === button));
    renderCatalog();
  }));
  renderCatalog();
});
