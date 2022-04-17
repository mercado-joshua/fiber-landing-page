"use strict";

var navSection = function navSection() {
  var openBtn = document.querySelector("[data-js-menu-btn]");
  var closeBtn = document.querySelector("[data-js-close-btn]");
  var navbar = document.querySelector("[data-js-nav-section]");
  openBtn.addEventListener("click", function () {
    navbar.classList.add("-active");
  });
  closeBtn.addEventListener("click", function () {
    navbar.classList.remove("-active");
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') navSection();
});