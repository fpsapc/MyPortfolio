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

// Project Section
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
    featuredImage: './img/Img Placeholder1-1.svg',
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
          <button class="work-button probutton hide">
          ${card.seeProject}
          </button>
        </div>
  `;
  return ('');
});
