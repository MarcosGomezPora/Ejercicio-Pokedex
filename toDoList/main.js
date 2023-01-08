let input$$ = document.getElementById("item")
let button$$ = document.querySelector(".btn-add")
let divLi$$ = document.querySelector(".li-container")
let empty$$ = document.querySelector(".empty")


function addItem() {
  let input$$ = document.getElementById("item");
  let item = input.value;
  let li$$ = document.createElement("li");
  li$$.textContent = item;
  let divLi$$ = document.querySelector(".li-container");
  todoList.appendChild(li$$);
  input.value = "";
}