// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";


// burger



const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const nav = document.querySelector(".header__nav");
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      menuBody.classList.toggle('_active');
      iconMenu.classList.toggle('menu-open');
      document.body.classList.toggle('_lock');
      nav.classList.toggle("block");
   });
}

// блок .bar между двумя блоками

const bar = document.querySelector('.bar');
let barHeigth;
if (bar) {
   barHeigth = bar.offsetHeight;
}


barHeigth = barHeigth * 0.8 + "px";
const prop = document.querySelector('.impact__container');
if (prop) {
   prop.style.setProperty("padding-bottom", barHeigth);
};


const blockTop = document.querySelector('.footer__container');
if (blockTop) {
   blockTop.style.setProperty("padding-top",  barHeigth);
};
