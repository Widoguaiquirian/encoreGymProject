"use strict";

//! Hook up
const btnUp = document.getElementById("button-up");

btnUp.addEventListener("click", scrollUp);

function scrollUp() {
   let currentScroll = document.documentElement.scrollTop;

   if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 10);
   }
}

window.onscroll = function () {
   let scroll = document.documentElement.scrollTop;
   if (scroll > 200) {
      btnUp.style.transform = "scale(1)";
   } else if (scroll < 200) {
      btnUp.style.transform = "scale(0)";
   }
};

//! Contact modal
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

//! Cookie messages
const body = document.querySelector(".body");
const message = document.createElement("div");

message.classList.add("cookie-message");
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn-ok-cookie"> I UNDERSTAND! </button> <button class="btn-no-cookie"> NO! </button>`;

body.append(message);

document.querySelector(".btn-ok-cookie").addEventListener("click", function () {
   message.remove();
});

//! Login modal
const loginModal = document.querySelector(".header__login-box");
const hoverModalActive = document.querySelector(".header__link--login");
const hoverModalDesactive = document.querySelector(".header__link--login");

const openLoginModal = function (e) {
   e.preventDefault();
   loginModal.classList.remove("header__login-box-hide");
};

const closeLoginModal = function (e) {
   e.preventDefault();
   loginModal.classList.add("header__login-box-hide");
};

hoverModalActive.addEventListener("mouseover", openLoginModal);
hoverModalDesactive.addEventListener("mouseout", closeLoginModal);

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

// ! Dark mode
const btnSwitch = document.querySelector(".switch");
const scheduleSection = document.querySelector(".schedules");
const detailInfo = document.querySelectorAll(".detail__info");
const crowdBar = document.querySelectorAll(".crowd__bar-meter");
const headerLinks = document.querySelectorAll(".header__nav-desktop .header__link");
const tabDay = document.querySelectorAll(".schedule__inner-top .crowd__tab-day");
const subtitle = document.querySelectorAll(".heading-secondary");
const membershipBox = document.querySelectorAll(".membership__plans");
const faBars = document.querySelectorAll(".svg__sprite--hamburguer");
const logo = document.querySelectorAll(".logo");
const headersignin = document.querySelectorAll(".header__nav-log .header__link--login");

btnSwitch.addEventListener("click", () => {
   document.body.classList.toggle("light");
   btnSwitch.classList.toggle("light");
   nav.classList.toggle("light");
   scheduleSection.classList.toggle("light");

   headersignin.forEach(function (e) {
      e.classList.toggle("light");
   });

   detailInfo.forEach(function (e) {
      e.classList.toggle("light");
   });

   crowdBar.forEach(function (e) {
      e.classList.toggle("light");
   });

   logo.forEach(function (e) {
      e.classList.toggle("light");
   });

   tabDay.forEach(function (e) {
      e.classList.toggle("light");
   });

   headerLinks.forEach(function (e) {
      e.classList.toggle("light");
   });

   membershipBox.forEach(function (e) {
      e.classList.toggle("light");
   });

   subtitle.forEach(function (e) {
      e.classList.toggle("light");
   });

   faBars.forEach(function (e) {
      e.classList.toggle("light");
   });
});
