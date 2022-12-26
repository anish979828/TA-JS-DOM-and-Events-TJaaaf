

let display = document.querySelector("input")
let ul = document.querySelector("ul");


let allMovies = [];
// handleinput function

function handleEvent(event){
  if(event.keyCode == 13 && event.target.value !== ""){
    allMovies.push({name:event.target.value,watched: false})
    createUI();
    event.target.value = ""
  }
}


// UI for selected movies 

function createUI(){
  ul.innerHTML = ""
  allMovies.forEach((movie,i) => {
    let li = document.createElement("li")
    li.focus();
    let input = document.createElement("input")
     input.type = "checkbox"
     input.checked = movie.watched;
     input.id = i;
     input.addEventListener("change", handleChange )
     let label = document.createElement("label")
     label.innerText = movie.name;
     let span = document.createElement("span");
     span.classList.add("delete");
     span.id = i;
     span.innerText = "X"
     li.append(input,label,span)
     ul.append(li);
  })
}

// update checkbox function 
function handleChange(event){
  let id = event.target.id
  allMovies[id].watched = !allMovies[id].watched

}


// delete movie function 

function deleteMovie(event){
  if(!event.target.classList.contains("delete")) return;
  var id = event.target.id;
  allMovies.splice(id, 1);
  createUI();
}

// dellet movie event

ul.addEventListener("click", deleteMovie);

// addEvent on input 

display.addEventListener("keyup" ,handleEvent)
 




