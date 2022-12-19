let input = document.querySelector("#text");
let root = document.querySelector("ul");

let allMovies = [
  {
    name: "Avenger",
    watched: false,
  },
];

function handleEvent(event) {
  // console.log(event.target.value);
  if (event.keyCode === 13 && event.target.value !== "") {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });

    createMovieUI();
  }
}

function deleteMovie(event) {
  console.log(event.target);
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function createMovieUI() {
  root.innerHTML = "";
  allMovies.forEach((movies, i) => {
    let li = document.createElement("li");

    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.id = i;
    inp.checked = movies.watched;

    let label = document.createElement("label");
    label.for = i;
    label.innerText = movies.name;
    let span = document.createElement("span");
    span.innerText = "X";
    span.setAttribute("data-id", i);

    span.addEventListener("click", deleteMovie);
    li.append(inp, label, span);

    root.append(li);
  });
}

createMovieUI();
input.addEventListener("keyup", handleEvent);