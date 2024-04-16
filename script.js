
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav_logo');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
