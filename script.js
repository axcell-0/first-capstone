const hamburger = document.getElementById('menu-icon');
const mainMenu = document.getElementById('main-menu');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', () => {
  mainMenu.classList.add('menushow');
});

closeIcon.addEventListener('click', () => {
  mainMenu.classList.remove('menushow');
});

const speakerData = [
  {
    img: './images/phone-view-icons/investors_01.png',
    name: 'Yochai Benkle',
    profession: 'Chef in Hotel-hilton',
    description: 'Focusing on a common approach in how to improve the quality of the service in a restaurant',
  },
  {
    img: './images/phone-view-icons/investors_02.png',
    name: 'Kilnam Chon',
    profession: 'Chef in Hotel-palace',
    description: 'Discover achu and yellow soupe, explaine how it can cure some certain illness.',
  },
  {
    img: './images/phone-view-icons/investors_03.png',
    name: 'sohyeong Noh',
    profession: 'Chef in Hotel-china-town',
    description: 'coming directly from HongKong to give her advice and encourage of this new restaurant.',
  },
  {
    img: './images/phone-view-icons/investors_04.png',
    name: 'Julia Reda',
    profession: 'Representing Chef in hotel-picasso in France',
    description: 'One of the best chef crown by the president of France itself.',
  },
  {
    img: './images/phone-view-icons/investors_05.png',
    name: 'Lila Treticov',
    profession: 'Secretary of chef in russia of the department of brevrage',
    description: 'Contribution in the exporting and importing of goods and services.',
  },
  {
    img: './images/phone-view-icons/investors_06.png',
    name: 'Ryan Merkley',
    profession: 'President in the chef sector in hotel-Torento',
    description: 'Incharge of investigation of how food have to be cooked in a restaurant.',
  },
];

const container = document.getElementById('container');

function data() {
  speakerData.forEach((speaker) => {
    container.innerHTML += `<article class="investors-list">
    <img src="${speaker.img}" alt="" class="investors-img">
    <div class="investors-content">
    <h4>${speaker.name}</h4>
    <h5>${speaker.profession}</h5>
    <hr class="investors-line" />
    <p class="investors-description">${speaker.description}</p>
    </div>
    </article>`;
  });
}

data();

const programCategoriesData = [
  {
    icon: './images/phone-view-icons/program_icon_01.png',
    title: 'Discours',
    description: 'Listen to the opening talks of the manager about the restaurant.',
  },
  {
    icon: './images/phone-view-icons/program_icon_02.png',
    title: 'Presentation',
    description: 'Video presentented on a large screen of diffrerent types of food present in our various menu.',
  },
  {
    icon: './images/phone-view-icons/program_icon_03.png',
    title: 'Forum',
    description: 'Listen to diffrerent ways of improving our service to have a better experience.',
  },
  {
    icon: './images/phone-view-icons/program_icon_04.png',
    title: 'Exchange',
    description: 'Opportunity open to recrute good personnel.',
  },
  {
    icon: './images/phone-view-icons/program_icon_05.png',
    title: 'Degustation',
    description: 'party time and enjoyement will be available',
  },
];

const programCategoriesContainer = document.getElementById('program-details-container');

function createprogramCategories() {
  programCategoriesData.forEach((category) => {
    programCategoriesContainer.innerHTML += `
    <div class="programe-detail">
    <img src="${category.icon}" alt="">
    <span class="title-programe">${category.title}</span>
    <p class="programe-para">${category.description}</p>
    </div>`;
  });
}

createprogramCategories();