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
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-3.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro2',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-2.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-1.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
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
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro1',
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-3.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro2',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-2.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
  },
  {
    id: 'bg-pro3',
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './img/Img Placeholder1-1.svg',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    seeProject: 'See Project',
    linkLive: 'See live',
    linkSource: 'See source',
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
                  class="work-button"><a href="https://fpsapc.github.io/MicroverseStudentProject1/">${allProjects[index].linkLive}</a>
                  <img src="./img/live.png" alt="live icon">
                  </button>
                  <button id= "see-source" 
                  class="work-button">
                  <a href="https://github.com/fpsapc/MicroverseStudentProject1/">${allProjects[index].linkSource}</a>
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