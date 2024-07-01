// burger menu
document.addEventListener("DOMContentLoaded", () => {
function toggleBurgerMenu(){
    burgerMenu.classList.toggle('show');
    menu.classList.toggle('show')
}
const burgerMenu = document.querySelector('.humbarger'),
      menu = document.getElementById('menu');
burgerMenu.addEventListener('click',toggleBurgerMenu)
});