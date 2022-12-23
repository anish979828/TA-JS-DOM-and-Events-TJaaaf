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
// handleChange function \
function handleChange(event){
    let id = event.target.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    createUI(allTodo);
    localStorage.setItem('allTodo',JSON.stringify(allTodo))
    footerUI();
}

function deleteTodo(event){
    if(!event.target.classList.contains("delete")) return;
    var id = event.target.id;
    allTodo.splice(id, 1);
    createUI(allTodo);
    localStorage.setItem('allTodo',JSON.stringify(allTodo))
    footerUI();
}

// UI for todo 

function createUI(data){
    ul.innerHTML = "";
   data.forEach((ele,i) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.checked = ele.isDone;
        input.type = "checkbox";
        input.classList.add("input");
        input.id = i;
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
        console.log(allTodo, 'hekckk')
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