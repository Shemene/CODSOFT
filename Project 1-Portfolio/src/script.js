let menu = document.querySelector("#menu");
let navbar = document.querySelector("#menu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
