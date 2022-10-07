// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const nav = document.querySelector(".header__nav");
if (iconMenu) {
   iconMenu.addEventListener("click", function(e) {
      menuBody.classList.toggle('_active');
      iconMenu.classList.toggle('menu-open');
      document.body.classList.toggle('_lock');
      nav.classList.toggle("block");
   });
}

