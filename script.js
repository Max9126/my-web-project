const myProjects = [
    { id: 1, title: "Сайт-візитка", desc: "HTML/CSS/JavaScript", src: "https://github.com/Max9126/my-web-project", site: "https://max9126.github.io/my-web-project/#top" },
    { id: 2, title: "Магазин", desc: "JavaScript" },
    { id: 3, title: "StraTeam", desc: "Курсова робота.", img: "Images/Projects/Project_Screenshot_StraTeam.webp", imgAlt: "Скріншот проєкту StraTeam", src: "https://github.com/Max9126/StraTeam" },
    { id: 4, title: "Портфоліо", desc: "HTML/CSS/JavaScript" }
];
function createProjectCard(project) {
  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      ${project.img ? `<img class="project-image" src="${project.img}" alt="${project.imgAlt}"></img>` : ''}
      <p>${project.desc}${project.site ? `<a href="${project.site}" class="project-button my-button" target="_blank">View site</a>` : ''}${project.src ? `<a href="${project.src}" class="project-button my-button">Project page</a>` : ''}</p>
    </div>
  `;
}
const container = document.querySelector('div.projects-container');
function renderProjects(list) {
  if (!container) return;
  container.innerHTML = list
    .map(project => createProjectCard(project))
    .join('');
}
renderProjects(myProjects);
const searchInput = document.querySelector('#search-input');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const filtered = myProjects.filter(project =>
      project.title.toLowerCase().includes(value)
    );
    renderProjects(filtered);
  });
}

const themeBtn = document.querySelector('#theme-toggle');
const bodyElement = document.body;
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
  });
}

const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
if (openBtn && closeBtn && modal) {
  openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('is-open');
  }
});

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#user-name');
if (form && nameInput) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nameInput.value.trim().length < 2) {
      alert("Ім'я має містити щонайменше 2 символи");
    } else {
      alert("Форму відправлено!");
    }
  });
}