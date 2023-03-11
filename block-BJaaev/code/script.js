let display = document.querySelector(".display")
let ul = document.querySelector("ul")

let allTodo = JSON.parse(localStorage.getItem("allTodo")) || [];


// handleInput function 

function handleInput(event){
   if(event.keyCode == 13 && event.target.value !== ""){
    allTodo.push({todo:event.target.value , isDone:false})
    createUI(allTodo);
    footerUI();
    event.target.value = "";
    localStorage.setItem('allTodo',JSON.stringify(allTodo));
   }
}
// handleChange function 
function handleChange(event){
    let id = event.target.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    createUI(allTodo);
    localStorage.setItem('allTodo',JSON.stringify(allTodo))
    footerUI();
}

function deleteTodo(event){
    // if(!event.target.classList.contains("delete")) return;
    let  id = event.target.id;
    console.log(id);
    allTodo.splice(id, 1);
    // console.log(allTodo);
    // let a = allTodo.filter(el => id !== el.id);
    // allTodo = a;
    console.log(allTodo);
    createUI(allTodo);
    localStorage.setItem('allTodo',JSON.stringify(allTodo))
    footerUI();
}

// UI for todo 

function createUI(data){
    ul.innerHTML = "";
   data.forEach((ele,i) => {
        let li = document.createElement("li");
        ele.id = i;
        let input = document.createElement("input");
        input.checked = ele.isDone;
        input.type = "checkbox";
        input.classList.add("input");
        input.id = i;
        li.id = i;
        input.addEventListener("change",handleChange);
        let label = document.createElement("label");
        label.innerText = ele.todo;
        label.setAttribute("for" ,i);
        label.classList.add('strikethrough');
        let span = document.createElement("span");
        span.innerText = "❌";
        span.id = i;
        span.classList.add("delete");
        span.addEventListener("click",deleteTodo );
        li.append(input,label,span);
        ul.append(li);
    })
}
createUI(allTodo);
// footerUI()
// footerUI
let footer = document.querySelector("footer")

// filteritem 
function filterItem() {
    let array =  allTodo.filter(i => i.isDone == false);
    return array.length;
}
  
function handleClickActive(){
    const item = allTodo.filter(i => !i.isDone)
    createUI(item);
    footerUI(); 
}

function handleClickAll(){
    createUI(allTodo)
}

function handleClickCompleted(){
    let item = allTodo.filter(i => i.isDone)
    createUI(item)
}

function handleClearCompleted(){
    var filteredArr = allTodo.filter(item => !item.isDone);
    allTodo = [...filteredArr];
    createUI(allTodo);
    localStorage.setItem('allTodo',JSON.stringify(allTodo))
    footerUI();
}


function footerUI(){
    footer.innerHTML = ""
    if(allTodo.length > 0) {
        let todoCount = document.createElement("span")
        todoCount.innerText = `${filterItem()} items left`
        let filter = document.createElement("ul")
        filter.classList.add("footer")
        let all = document.createElement("button")
        all.innerText = "All"
        all.addEventListener("click",handleClickAll)
        let active = document.createElement("button")
        active.addEventListener("click" , handleClickActive)
        active.innerText = "Active"
        active.classList.add("active")
        let completed = document.createElement("button")
        completed.innerText = "completed"
        completed.addEventListener("click",handleClickCompleted)
        filter.append(all,active,completed);
        let clearCompleted = document.createElement("button")
        clearCompleted.addEventListener("click" , handleClearCompleted)
        clearCompleted.innerText = "clear completed"
        footer.append(todoCount,filter,clearCompleted)
    }
}



// Event on display 

display.addEventListener("keyup" , handleInput)

let input = document.querySelector("#text");
let root = document.querySelector("ul");
let All = document.querySelector(".All");
let Completed = document.querySelector(".Completed");
let Active = document.querySelector(".Active");
let Clear = document.querySelector(".Clear");
let item = document.querySelector(".item");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

function handleEvent(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && event.target.value !== "") {
    allTodos.push({
      todo: value,
      isDone: false,
    });
    createUI(allTodos, root);
    event.target.value = "";
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
}

// function deleteTodo(event) {
//   let id = event.target.dataset.id;

//   allTodos.splice(id, 1);
//   localStorage.setItem("todos", JSON.stringify(allTodos));
//   createUI(allTodos, root);
// }

// function handleToggle(event) {
//   let id = event.target.dataset.id;
//   allTodos[id].isDone = !allTodos[id].isDone;

//   localStorage.setItem("todos", JSON.stringify(allTodos));

//   createUI(allTodos, root);
// }

// function handleCompleted(event) {
//   let completed = allTodos.filter((e) => e.isDone);
//   createUI(completed);
// }
// function handleActive() {
//   let active = allTodos.filter((e) => !e.isDone);
//   createUI(active);
// }
// function handleALl() {
//   createUI();
// }

// function createUI(data = allTodos, rootElm = root) {
//   rootElm.innerHTML = "";
//   data.forEach((elm, index) => {
//     let li = document.createElement("li");
//     let inp = document.createElement("input");
//     inp.type = "checkbox";
//     inp.checked = elm.isDone;
//     inp.setAttribute("data-id", index);
//     inp.addEventListener("input", handleToggle);

//     let p = document.createElement("p");
//     p.innerText = elm.todo;
//     if (elm.isDone == true) {
//       p.classList.add("checked");
//     }
//     let div = document.createElement("div");
//     let span = document.createElement("span");
//     span.innerText = "X";
//     span.innerText = "X";
//     span.setAttribute("data-id", index);

//     span.addEventListener("click", deleteTodo);

//     div.append(span);

//     li.append(inp, p, div);
//     root.append(li);

//     item.innerText = `${allTodos.filter((e) => !e.isDone).length} items left`;
//   });
// }

// input.addEventListener("keyup", handleEvent);
// Completed.addEventListener("click", handleCompleted);
// Active.addEventListener("click", handleActive);
// All.addEventListener("click", handleALl);
