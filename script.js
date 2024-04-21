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

//scrolling on pages
function pageScroll() {
  let my_time;
  let count = 0;
  // If condition to set repeat
  if (count < 2) {
    let objDiv = document.querySelector('.drawer');
    if (!checkHover(objDiv)) {
      objDiv.scrollLeft = objDiv.scrollLeft + 1;
      if (objDiv.scrollWidth - objDiv.scrollLeft - objDiv.clientWidth < 1) {
        setTimeout(function () {
          objDiv.scrollLeft = 0;
          count++;
        }, 2000);
      }
    }

    //set scrolling time start
    my_time = setTimeout('pageScroll()', 15);
    //set scrolling time end
  }
}
const checkHover = (div) => {
  const children = Array.from(div.children);
  let flag = false;
  children.forEach((child) => {
    if (child.matches(':hover') || child.matches(':focus')) {
      flag = true;
    }
  });
  return flag;
};

//ADD NEW INFO

//GITHUB REST API
const baseUrl = 'https://api.github.com';
async function getGithubUserInfo(userName) {
  try {
    await new GitHubCalendar('.calendar', 'Oreniscool', { responsive: true });
    const response = await fetch(`${baseUrl}/users/${userName}`);
    const json = await response.json();
    return json;
  } catch (e) {
    console.error(e);
  }
}

async function addGithubUserInfo() {
  const info = await getGithubUserInfo('Oreniscool');
  const publicRepos = info.public_repos;
  const followers = info.followers;
  const following = info.following;
  const columns = Array.from(document.querySelectorAll('.contrib-column'));
  printInfo(publicRepos, followers, following, columns);
}
const printInfo = (publicRepos, followers, following, columns) => {
  columns[0].children[0].textContent = 'Public repos';
  columns[0].children[1].textContent = publicRepos;
  columns[1].children[0].textContent = 'Followers';
  columns[1].children[1].textContent = followers;
  columns[2].children[0].textContent = 'Following';
  columns[2].children[1].textContent = following;
  columns.forEach((column) => {
    column.children[0].style = 'font-size:1rem';
    column.children[2].textContent = '';
  });
};
addGithubUserInfo();
setTimeout('pageScroll()', 2000);
