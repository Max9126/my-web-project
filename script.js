console.log("JS connected!");

const myProjects = [
    { id: 1, title: "Сайт-візитка", desc: "HTML/CSS/JavaScript", src: "https://github.com/Max9126/my-web-project", site: "https://max9126.github.io/my-web-project/#top" },
    { id: 2, title: "Магазин", desc: "JavaScript" },
    { id: 3, title: "StraTeam", desc: "Курсова робота.", img: "Images/Projects/Project_Screenshot_StraTeam.webp", imgAlt: "Скріншот проєкту StraTeam", src: "https://github.com/Max9126/StraTeam" }
];
console.log(myProjects[0]);
console.log(myProjects[0].title);

const container = document.querySelector('div.projects-container');
if (container) {
    console.log("container founded");
    myProjects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project-card');
        const h3 = document.createElement('h3');
        h3.textContent = project.title;
        div.appendChild(h3);
        if (project.img) {
            const img = document.createElement('img');
            img.classList.add('project-image');
            img.src = project.img;
            if (project.imgAlt) img.alt = project.imgAlt;
            div.appendChild(img);
        }
        const p = document.createElement('p');
        p.textContent = project.desc;
        div.appendChild(p);
        if (project.site) {
            const a = document.createElement('a');
            a.classList.add('project-button', 'my-button');
            a.href = project.site;
            a.textContent = 'View site';
            p.appendChild(a);
        }
        if (project.src) {
            const a = document.createElement('a');
            a.classList.add('project-button', 'my-button');
            a.href = project.src;
            a.textContent = 'Project page';
            p.appendChild(a);
        }
        container.appendChild(div);
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