// Start for toggle menu

const navLinks = document.querySelector(".nav-links");
const showMenu = document.querySelector(".show-menu");
const hideMenu = document.querySelector(".hide-menu");

showMenu.addEventListener("click", ()=> {
  navLinks.style.right = "0";
})

hideMenu.addEventListener("click", ()=> {
  navLinks.style.right = "-200px";
})
// end of toggle menu