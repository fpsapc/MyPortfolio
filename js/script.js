const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

const projects = [
  {
    id: 'bg-pro1',
    name: 'Awesome Books',
    description: 'In this project you can add new book and remove existing books, it looks like a library.',
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['html', 'JavaScript', 'CSS'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/awesome-book-withES6/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/awesome-book-withES6" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Budget App',
    description: 'The Ruby on Rails capstone project is about building a mobile web application where someone can manage his budget: He will provide list of transactions associated with a category.',
    featuredImage: './img/budget.JPG',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS',],
    seeProject: 'See Project',
    linkLive: '<a href="https://budget-app-g33j.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/budget_app" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'Crypto Currencies',
    description: 'This project gets crypto currencies data from an API and display it. You can also search crypto by name and see its details.',
    featuredImage: './img/crypto.JPG',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://crypto-currencies-gb1a.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactcapstoneproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Space Travelers',
    description: 'In this project we use Kanban board to distribute tasks. Fetch data from API and display it. Use Redux store to update state.',
    featuredImage: './img/space.JPG',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://react-redux-group-project.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactreduxgroupproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add your daily tasks list here and tick every task acording to its completion. You can also remove and edit tasks. You can also clear all completed tasks after selecting them from the list.',
    featuredImage: './img/to_do_list.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/To_Do_List/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/To_Do_List" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro6',
    name: 'Movies Showcase',
    description: 'API-based web application built with Vanilla JavaScript ES6 and pure CSS! I used a range of tools and best practices to ensure high-quality code and effective collaboration:',
    featuredImage: './img/moviesshowcase.JPG',
    technologies: ['Jest', 'Webpacks', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc-movies-showcase.netlify.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/movies-showcase" target="blank">See Source</a>',
  },
];

const projectsContainer = document.getElementById('projects-container');

projects.map((card) => {
  projectsContainer.innerHTML += `
  <div id="${card.id}" class="project-card">
          <div class="card-text flex flex-column">
            <h2 class="work-subtitle protitle">
            ${card.name}
            </h2>
            <p class="work-details prodetails">${card.description}
            </p>
            <div class="flex">
              <p class="flex-item item2 proitem2">${card.technologies[0]}</p>
              <p class="flex-item item3 proitem3">${card.technologies[1]}</p>
              <p class="flex-item item1 proitem1">${card.technologies[2]}</p>
            </div>
          </div>
          <button class="work-button probutton ">
          ${card.seeProject}
          </button>
  </div>
  `;
  return ('');
});

const allProjects = [
  {
    id: 'projects',
    name: 'Apple Chemicals',
    description: 'This project belongs to inform farmers about a meeting and also introduced some aspect of company.',
    featuredImage: './img/applechemicals.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/AppleChemicals/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/AppleChemicals" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro1',
    name: 'Awesome Books',
    description: 'In this project you can add new book and remove existing books, it looks like a library.',
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['html', 'JavaScript', 'CSS'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/awesome-book-withES6/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/awesome-book-withES6" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Budget App',
    description: 'The Ruby on Rails capstone project is about building a mobile web application where someone can manage his budget: He will provide list of transactions associated with a category.',
    featuredImage: './img/budget.JPG',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS',],
    seeProject: 'See Project',
    linkLive: '<a href="https://budget-app-g33j.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/budget_app" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'Crypto Currencies',
    description: 'This project gets crypto currencies data from an API and display it. You can also search crypto by name and see its details.',
    featuredImage: './img/crypto.JPG',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://crypto-currencies-gb1a.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactcapstoneproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Space Travelers',
    description: 'In this project we use Kanban board to distribute tasks. Fetch data from API and display it. Use Redux store to update state.',
    featuredImage: './img/space.JPG',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://react-redux-group-project.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactreduxgroupproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add your daily tasks list here and tick every task acording to its completion. You can also remove and edit tasks. You can also clear all completed tasks after selecting them from the list.',
    featuredImage: './img/to_do_list.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/To_Do_List/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/To_Do_List" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro6',
    name: 'Movies Showcase',
    description: 'API-based web application built with Vanilla JavaScript ES6 and pure CSS! I used a range of tools and best practices to ensure high-quality code and effective collaboration:',
    featuredImage: './img/moviesshowcase.JPG',
    technologies: ['Jest', 'Webpacks', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc-movies-showcase.netlify.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/movies-showcase" target="blank">See Source</a>',
  },
];
// pop-up section
const seeProject = document.querySelectorAll('.work-button');
const popMenu = document.querySelector('.seePopup');

seeProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `    
    <section id="popup" class="popup">
        <div id="popup-title">
          <h3 class="popup-heading flex">${allProjects[index].name}<h3>
            <span class="close-btn">&#x2715;</span>
            <div class="flex
            flex-start">
              <p class="flex-item">${allProjects[index].technologies[0]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[1]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[2]}
              </p>
          </div>
        </div>
          <div class="popup-card">
             <div id="popup-image"><img src="${allProjects[index].featuredImage}" alt="something here">
              </div>
              <div class="flex flex-column">
                <p class="popup-details">
                ${allProjects[index].description}
                </p>
                <div class="flex popup-textbtn">
                  <button id= "see-live" 
                  class="work-button">${allProjects[index].linkLive}
                  <img src="./img/live.png" alt="live icon">
                  </button>
                  <button id= "see-source" 
                  class="work-button">
                  ${allProjects[index].linkSource}
                   <img src="./img/project.png" alt="source icon">
                  </button>
                </div>
              </div>
          </div>
     </section>
`;
    const popClose = document.querySelector('.close-btn');
    popClose.addEventListener('click', () => {
      popMenu.classList.remove('act');
      document.body.classList.remove('no-scroll');
    });
  });
});

// form validation

const checkCase = (str) => {
  const isLower = str.toString().toLowerCase();
  if (str === isLower) {
    return true;
  }
  return false;
};
const validate = (email) => {
  email.preventDefault();
  const inputMail = document.getElementById('email').value;
  const form = document.getElementById('getintouch-form');
  const checkedEmail = checkCase(inputMail);
  if (checkedEmail === true) {
    form.action = 'https://formspree.io/f/xoqzdnpa';
    form.submit();
  } else {
    const throughError = document.getElementById('error-msg');
    throughError.innerHTML = 'Please check your email address. email field always be in lower case.';
  }
};
const form = document.getElementById('getintouch-form');
form.addEventListener('submit', validate);

// local storage

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#textarea');

// Load the data from local storage, if it exists
const savedData = JSON.parse(localStorage.getItem('formData'));

if (savedData) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Save the data to local storage as a single entry
  localStorage.setItem('formData', JSON.stringify(formData));
}
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);
