const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ultEL = document.querySelector(".list");
let list = JSON.parse(localStorage.getItem("list"));
formEl.addEventListener("submit", (event)=> {
  event.preventDefault();
  toDoList();
})

function toDoList(){
 let newTodo = inputEl.value;
 const liEl = document.createElement("li")
 liEl.innerText = newTodo
 ultEL.appendChild(liEl);
 inputEl.value = ""

 const checkBtn = document.createElement("div");
 checkBtn.innerHTML = `<i class="fa fa-check-square" aria-hidden="true"></i>`
 liEl.appendChild(checkBtn);

 const trashBtn = document.createElement("div");
 trashBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
 liEl.appendChild(trashBtn)

 checkBtn.addEventListener("click", ()=> {
  liEl.classList.toggle("checked")
  updateLocalStorage()
 })

 trashBtn.addEventListener("click", ()=> {
  liEl.remove()
  updateLocalStorage()
 })
 updateLocalStorage()
}


function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
 list = [];
  liEls.forEach(liEl => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    })
  })
  localStorage.setItem("list", JSON.stringify(list))
}