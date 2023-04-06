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
    name: 'Apple Chemicals',
    description: 'This project belongs to inform farmers about a meeting and also introduced some aspect of company.',
    featuredImage: './img/applechemicals.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/AppleChemicals/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/AppleChemicals">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Awesome Books',
    description: 'In this project you can add new book and remove existing books, it looks like a library.',
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['html', 'JavaScript', 'CSS'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/awesome-book-withES6/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/awesome-book-withES6">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'My Protfolio',
    description: 'I use mobile first approach to make this project and make it responsive for all devices.',
    featuredImage: './img/portfolio.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/MicroverseStudentProject1/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/MicroverseStudentProject1">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-3.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro5',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-2.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro6',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-2.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
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
    name: 'My Recent Works',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/MicroverseStudentProject1/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/MicroverseStudentProject1">See Source</a>',
  },
  {
    id: 'bg-pro1',
    name: 'Apple Chemicals',
    description: 'This project belongs to inform farmers about a meeting and also introduced some aspect of company.',
    featuredImage: './img/applechemicals.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/AppleChemicals/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/AppleChemicals">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Awesome Books',
    description: 'In this project you can add new book and remove existing books, it looks like a library.',
    featuredImage: './img/awesomebooks.JPG',
    technologies: ['html', 'JavaScript', 'CSS'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/awesome-book-withES6/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/awesome-book-withES6">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'My Protfolio',
    description: 'I use mobile first approach to make this project and make it responsive for all devices.',
    featuredImage: './img/portfolio.JPG',
    technologies: ['html', 'CSS', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://fpsapc.github.io/MicroverseStudentProject1/">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/MicroverseStudentProject1">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-3.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro5',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-2.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro6',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-1.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
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
