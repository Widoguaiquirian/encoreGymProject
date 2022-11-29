"use strict";
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

//! Carrousel of experience
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
