let typed = new Typed('.auto-input', {
  strings: ['Oren', 'Qitiya'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const skills = [
  {
    name: 'HTML',
    img: './assets/skills/html.png',
    desc: 'Able to implement advanced HTML topics like WAI-ARIA and WCAG guidelines for websites.',
  },
  {
    name: 'CSS',
    img: './assets/skills/css.png',
    desc: 'Extensive wisdom on intermediate and advanced CSS concepts like transforms, transitions and keyframes.',
  },
  {
    name: 'JavaScript',
    img: './assets/skills/JavaScript-logo.png',
    desc: 'Fluent in advanced JavaScript concepts like ES6 modules, webpack, asynchronous programming.',
  },
  {
    name: 'Node',
    img: './assets/skills/node-js.png',
    desc: 'Knowledge in various topics in node like package management, authentication, databasing and routing etc.',
  },
  {
    name: 'Git',
    img: './assets/skills/git.png',
    desc: 'Theoretical and application based understanding of how Git works from commits to rebasing.',
  },
  {
    name: 'Python',
    img: './assets/skills/python.png',
    desc: 'Made projects implementing multi-threading and Tkinter GUI.',
  },
  {
    name: 'React',
    img: './assets/skills/react.png',
    desc: 'Beginner knowledge of react workflow.',
  },
  {
    name: 'CPP',
    img: './assets/skills/cpp.png',
    desc: 'Experience in working with C++.',
  },
  {
    name: 'Java',
    img: './assets/skills/java.png',
    desc: 'Knowledge of java workflow and OOP principles.',
  },
  {
    name: 'Photography',
    img: './assets/skills/camera.jpg',
    desc: 'Photography enthusiast with many photos accepted on websites like shutterstock.',
  },
];

const projects = [
  {
    name: 'TickTracker',
    img: './assets/projects/ticktracker.png',
    desc: 'A todolist website with full functionality made in webpack.',
    link: 'https://tick-tracker.vercel.app/',
  },
  {
    name: 'Socially',
    img: './assets/projects/socially.jpeg',
    desc: 'A website to help NGOs and people connect with an intuitive interface.',
    link: 'https://soci-ally-gamma.vercel.app/',
  },
  {
    name: 'TempestTracker',
    img: './assets/projects/tempesttracker.png',
    desc: 'A website to view contemporary and future weather forecast of various cities; made using weatherapi.',
    link: 'https://github.com/Aaryan-Urunkar/SociAlly',
  },
  {
    name: 'TicTacToe',
    img: './assets/projects/tictactoe.png',
    desc: 'A tictactoe website to put to test my skills of IIFEs and module patterns in JS.',
    link: 'https://tic-tac-toe-omega-ecru.vercel.app/',
  },
  {
    name: 'Konkan-on-plate',
    img: './assets/projects/konkanonplate.png',
    desc: 'A restaurant landing page made using only JS and CSS to try out webpack.',
    link: 'https://restaurant-page-six.vercel.app/',
  },
  {
    name: 'Void',
    img: './assets/projects/void.png',
    desc: 'A TUI based chat client with RSA encryption using socket programming.',
    link: 'https://github.com/l3vith/void',
  },
  {
    name: 'Battleship',
    img: './assets/projects/battleship.png',
    desc: 'A Battleship skeleton made with vanilla Javascript.',
    link: 'https://battleship-topaz.vercel.app/',
  },
];

const loadSkills = () => {
  const skillsDiv = document.querySelector('.skills');
  const drawer = skillsDiv.querySelector('.drawer');

  skills.forEach((skillInfo) => {
    const skill = document.createElement('div');
    const img = document.createElement('img');
    const desc = document.createElement('p');

    img.src = skillInfo.img;
    img.alt = `${skillInfo.name}-logo`;
    desc.textContent = skillInfo.desc;

    skill.classList.add('skill');
    skill.append(img, desc);
    drawer.append(skill);
  });
};

const loadProjects = () => {
  const projectsDiv = document.querySelector('.projects');
  const drawer = projectsDiv.querySelector('.drawer');
  projects.forEach((projectInfo) => {
    const project = document.createElement('div');
    const header = document.createElement('h3');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    const link = document.createElement('div');
    img.src = projectInfo.img;
    img.alt = `${projectInfo.name}-logo`;
    header.textContent = projectInfo.name.toUpperCase();
    desc.textContent = projectInfo.desc;
    link.innerHTML = `<a href=${projectInfo.link}><i class="fa-solid fa-link"></i></a>`;
    link.classList.add('list');
    project.classList.add('project');
    project.append(img, header, desc, link);
    drawer.append(project);
  });
};
loadSkills();
loadProjects();
