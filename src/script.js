document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  function revealNavbar() {
    navbar.classList.add("reveal");
  }

  revealNavbar();
});

//menu slide from right
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");

  function revealMenuBtn() {
    menuBtn.classList.add("reveal");
  }

  revealMenuBtn();
});

//reveal name text rom the left on page load

document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector(".heading");

  function revealHeading() {
    heading.classList.add("reveal-left");
  }

  revealHeading();
});

//reveal the buttons pop up when page is loaded

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  function revealButtons() {
    buttons.forEach(function (button) {
      button.classList.add("reveal-pop");
    });
  }

  revealButtons();
});
