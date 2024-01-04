document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Close the menu when a link is clicked
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  function revealLogo() {
    logo.classList.add("reveal");
  }

  // Call the reveal function once the DOM content is loaded
  revealLogo();
});
