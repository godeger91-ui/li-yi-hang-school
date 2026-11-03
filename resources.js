const resourceTemplates = {
  'IT Fundamentals checklist': ['Hardware and software identified', 'Files organized with backups', 'Network connection tested', 'Security updates installed', 'Troubleshooting steps recorded'],
  'Web Design code review checklist': ['HTML uses meaningful landmarks', 'Images have useful alternatives', 'CSS layout has no horizontal overflow', 'JavaScript handles empty and error states', 'Page works with keyboard and touch'],
  'AI responsible-use checklist': ['Course disclosure rules checked', 'Sensitive data removed', 'Claims verified in reliable sources', 'Citation opened and confirmed', 'Final work checked for originality'],
  'HSK 1–2 vocabulary review': ['Chinese character copied', 'Tone-marked pinyin recorded', 'English meaning written', 'Example sentence completed', 'Word used in speaking practice']
};
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-resource]').forEach((button) => button.addEventListener('click', () => {
    const title = button.dataset.resource;
    const content = `${title}\nLi Yi Hang Learning\n\n${resourceTemplates[title].map((item, index) => `${index + 1}. [ ] ${item}`).join('\n')}\n`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a'); link.href = url; link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`; link.click(); URL.revokeObjectURL(url);
  }));
});
