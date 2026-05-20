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
const ProjectsContainer = document.querySelector('div.projects-container');
function renderProjects(list) {
  if (!ProjectsContainer) return;
  ProjectsContainer.innerHTML = list
    .map(project => createProjectCard(project))
    .join('');
}
renderProjects(myProjects);
const projectsSearchInput = document.querySelector('#projects-search-input');
if (projectsSearchInput) {
  projectsSearchInput.addEventListener('input', () => {
    const value = projectsSearchInput.value.toLowerCase();
    const filtered = myProjects.filter(project =>
      project.title.toLowerCase().includes(value)
    );
    renderProjects(filtered);
  });
}

let allPosts = [];
function createPost(post) {
  return `
    <div class="project-card">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
}
const loading = document.querySelector('#loading');
async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Помилка сервера');
    }
    const data = await response.json();
    allPosts = data.slice(0, 10);
    renderPosts(allPosts);
    loading.style.display = 'none';
  } catch (error) {
    console.error(error);
    loading.textContent = 'Помилка завантаження';
  }
}
const PostsContainer = document.querySelector('#posts-container');
function renderPosts(list) {
  if (!PostsContainer) return;
  const html = list
    .map(post => createPost(post))
    .join('');
  PostsContainer.innerHTML = html;
}
loadPosts();
renderPosts(allPosts);
const postsSearchInput = document.querySelector('#posts-search-input');
if (postsSearchInput) {
  postsSearchInput.addEventListener('input', () => {
    const value = postsSearchInput.value.toLowerCase();
    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(value)
    );
    renderPosts(filtered);
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

let tasks = [];
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    const data = localStorage.getItem('tasks');
    if (data) {
        tasks = JSON.parse(data);
    }
}
const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-task');
addBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (value === '') return;
    tasks.push({ text: value });
    saveTasks();
    renderTasks();
    input.value = '';
});
const list = document.querySelector('#tasks-container');
function renderTasks() {
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        const btn = document.createElement('button');
        btn.textContent = 'X';
        btn.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        li.appendChild(btn);
        list.appendChild(li);
    });
}
loadTasks();
renderTasks();