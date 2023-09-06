const searchBarControlEl = document.querySelector('.search-bar-container');
const magnifierEl = document.querySelector('.magnifier');

magnifierEl.addEventListener("click",() => {
 searchBarControlEl.classList.toggle('active')
})