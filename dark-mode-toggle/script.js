const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

function updateBodyEl() {
  if(inputEl.checked) {
    bodyEl.style.backgroundColor = "#333";
  } else {
    bodyEl.style.backgroundColor = "#fff";
  }
}
 


inputEl.addEventListener("input",()=>{
  updateBodyEl();
  
})

