// burger menu
document.addEventListener("DOMContentLoaded", () => {
function toggleBurgerMenu(){
    burgerMenu.classList.toggle('show');
    menu.classList.toggle('show')
}
const burgerMenu = document.querySelector('.humbarger'),
      menu = document.getElementById('menu');
burgerMenu.addEventListener('click',toggleBurgerMenu)

function toggleSelectCategorySelectList() {
    categorySelectList.classList.toggle('open')
  
}
const categorySelectList = document.querySelector('.category_select-list');
categorySelectList.addEventListener('click',toggleSelectCategorySelectList)

});