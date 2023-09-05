const bars = document.querySelector(".fa-bars");
const menu = document.querySelector(".nav-list");

bars.addEventListener("click", ()=> {
  menu.classList.toggle("show-nav-list")
})