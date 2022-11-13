"use strict";
const body = document.querySelector(".body");
const message = document.createElement("div");

// Cookie messages
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn-close-cookie"> GOT IT! </button>`;

body.append(message);

document.querySelector(".btn-close-cookie").addEventListener("click", function () {
   message.remove();
});

//Crowd meter
//Clase que comparten los botones
const tabsDays = document.querySelectorAll(".tab-day");
//Clase del container padre de los botones
const tabsDaysContainer = document.querySelector(".box-top");
//Clase que comparten los bloques de HTML a mostrar
const contentBoxMedium = document.querySelectorAll(".box-medium");

// ? AGREGAMOS EVENTO AL PADRE DE LOS BOTONES //
tabsDaysContainer.addEventListener("click", function (e) {
   const clicked = e.target.closest(".tab-day");
   if (!clicked) return;

   tabsDays.forEach(function (t) {
      t.classList.remove("activeDay");
   });

   contentBoxMedium.forEach(function (c) {
      c.classList.remove("grid-active");
   });

   clicked.classList.add("activeDay");

   document.querySelector(`.grid-bar-${clicked.dataset.tab}`).classList.add("grid-active");
});

// SCROLL REVEALING
const allRevealSections = document.querySelectorAll(".block");

const revealSection = function (entries, oberserver) {
   const [entry] = entries;

   if (!entry.isIntersecting) return;
   entry.target.classList.remove("block--hidden");
   oberserver.unobserve(entry.target);
};

const sectionOberserver = new IntersectionObserver(revealSection, {
   root: null,
   threshold: 0.1,
});

allRevealSections.forEach(function (section) {
   sectionOberserver.observe(section);
   section.classList.add("block--hidden");
});
