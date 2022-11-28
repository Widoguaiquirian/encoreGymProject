"use strict";

//! Cookie messages
const body = document.querySelector(".body");
const message = document.createElement("div");

message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn-ok-cookie"> I UNDERSTAND! </button> <button class="btn-no-cookie"> NO! </button>`;

body.append(message);

document.querySelector(".btn-ok-cookie").addEventListener("click", function () {
   message.remove();
});

//! Crowd meter
document.addEventListener("DOMContentLoaded", () => {
   //Clase que comparten los botones
   const tabsDays = document.querySelectorAll(".crowd__tab-day");
   //Clase del container padre de los botones
   const tabsDaysContainer = document.querySelector(".schedule__inner-top");
   //Clase que comparten los bloques de HTML a mostrar
   const contentBoxMedium = document.querySelectorAll(".schedule__inner-medium");

   // ? AGREGAMOS EVENTO AL PADRE DE LOS BOTONES //

   tabsDaysContainer.addEventListener("click", function (e) {
      const clicked = e.target.closest(".crowd__tab-day");
      if (!clicked) return;

      tabsDays.forEach(function (t) {
         t.classList.remove("crowd__tab-day--active");
      });

      contentBoxMedium.forEach(function (c) {
         c.classList.remove("group__bar--active");
      });

      clicked.classList.add("crowd__tab-day--active");

      document.querySelector(`.group__bar-${clicked.dataset.tab}`).classList.add("group__bar--active");
   });
});

//! Scroll revealing
// const allRevealSections = document.querySelectorAll(".block");

// const revealSection = function (entries, oberserver) {
//    const [entry] = entries;

//    if (!entry.isIntersecting) return;
//    entry.target.classList.remove("block--hidden");
//    oberserver.unobserve(entry.target);
// };

// const sectionOberserver = new IntersectionObserver(revealSection, {
//    root: null,
//    threshold: 0.1,
// });

// allRevealSections.forEach(function (section) {
//    sectionOberserver.observe(section);
//    section.classList.add("block--hidden");
// });

//! Sticky nav
const nav = document.querySelector(".header__nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
   if (window.scrollY > nav.offsetHeight + 650) {
      nav.classList.add("active");
   } else {
      nav.classList.remove("active");
   }
}

//! Menu mobile
const openBtn = document.querySelector(".header__btn--openNav");
const closeBtn = document.querySelector(".header__btn--closeNav");
const navs = document.querySelectorAll(".header__nav-mobile");

openBtn.addEventListener("click", function () {
   navs.forEach(function (nav) {
      nav.classList.add("visible");
   });
});

closeBtn.addEventListener("click", function () {
   navs.forEach(function (nav) {
      nav.classList.remove("visible");
   });
});

//! Carrousel of experience
window.onload = function () {
   const sliderGrid = function () {
      const slidesGrid = document.querySelectorAll(".feed__slider");
      const btnLeftGrid = document.querySelector(".feed_btn--left");
      const btnRightGrid = document.querySelector(".feed_btn--right");

      let curSlideGrid = 0;
      // ? PARA QUE EL MAXIMO SEA EL NUMERO DE SLIDES USADOS //
      const maxSlideGrid = slidesGrid.length;

      const goToSlide = function (slide) {
         slidesGrid.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
      };

      // Next slide
      const nextSlide = function () {
         if (curSlideGrid === maxSlideGrid - 1) {
            curSlideGrid = 0;
         } else {
            curSlideGrid++;
         }

         goToSlide(curSlideGrid);
      };

      const prevSlide = function () {
         if (curSlideGrid === 0) {
            curSlideGrid = maxSlideGrid - 1;
         } else {
            curSlideGrid--;
         }
         goToSlide(curSlideGrid);
      };

      const init = function () {
         goToSlide(0);
      };

      init();

      // Event handlers
      btnRightGrid.addEventListener("click", nextSlide);
      btnLeftGrid.addEventListener("click", prevSlide);
   };

   sliderGrid();
};

//! Contact modal
window.onload = function () {
   const modal = document.querySelector(".modal");
   const btnsOpenModal = document.querySelectorAll(".modal__btn--open");
   const btnCloseModal = document.querySelector(".modal__btn--close");
   const overlay = document.querySelector(".modal__overlay");

   const openModal = function (e) {
      e.preventDefault();
      overlay.classList.remove("modal__hidden");
      modal.classList.remove("modal__hidden");
   };

   const closeModal = function (e) {
      e.preventDefault();
      overlay.classList.add("modal__hidden");
      modal.classList.add("modal__hidden");
   };

   btnCloseModal.addEventListener("click", closeModal);

   btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
};
