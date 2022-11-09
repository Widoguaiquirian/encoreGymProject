"use strict";
// const body = document.querySelector(".body");
// const message = document.createElement("div");

// // Cookie messages
// message.classList.add("cookie-message");
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn-close-cookie"> GOT IT! </button>`;

// body.append(message);

// document.querySelector(".btn-close-cookie").addEventListener("click", function () {
//    message.remove();
// });

//Crowd meter
//Clase que comparten los botones
const tabs = document.querySelectorAll(".tab-day");
//Clase del container padre de los botones
const tabsContainer = document.querySelector(".tabs-component-container");
//Clase que comparten los bloques de HTML a mostrar
const tabsContent = document.querySelectorAll(".tabs-content");

// ? AGREGAMOS EVENTO AL PADRE DE LOS BOTONES //
tabsContainer.addEventListener("click", function (e) {
   const clicked = e.target.closest(".tab-day");
   if (!clicked) return;

   tabs.forEach(function (t) {
      t.classList.remove("tabs-button-active");
   });

   tabsContent.forEach(function (c) {
      c.classList.remove("tabs-content-active");
   });

   clicked.classList.add("tabs-button-active");

   document.querySelector(`.tabs-content-${clicked.dataset.tab}`).classList.add("tabs-content-active");
});
