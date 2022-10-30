"use strict";
const body = document.querySelector(".body");
const message = document.createElement("div");

// Cookie messages
message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn-close-cookie"> Got it! </button>`;

body.append(message);

document.querySelector(".btn-close-cookie").addEventListener("click", function () {
   message.remove();
});
