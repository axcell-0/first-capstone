const hamburger = document.getElementById('menu-icon');
const mainMenu = document.getElementById('main-menu');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', () => {
  mainMenu.classList.add('menushow');
});

closeIcon.addEventListener('click', () => {
  mainMenu.classList.remove('menushow');
});