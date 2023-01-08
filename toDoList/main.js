let input$$ = document.getElementById("input")
let button$$ = document.getElementById("button")
let divLi$$ = document.getElementById("div-container")
let empty$$ = document.getElementById("div-empty")


button$$.addEventListener('click', function(){
  let li$$ = document.createElement("li")
  li$$.innerText = input$$.value; 
  divLi$$.appendChild(li$$);
  empty$$.style.display = 'none';
  let deleteButton$$ = document.createElement("button")
  deleteButton$$.addEventListener('click', function(){
    li$$.style.display = 'none';
  })
  li$$.appendChild(deleteButton$$)
})