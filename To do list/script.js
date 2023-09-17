const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ultEL = document.querySelector(".list")
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
 })

 trashBtn.addEventListener("click", ()=> {
  liEl.remove()
 })
}