let ul = document.querySelector("ul");
let houses = document.querySelector(".houses");
let input = document.querySelector("#text");

let gotArr = {};
let activeHouse = "";

let allTags = got.houses.map((tag) => tag.name);

function createHouse(tags = []) {
  houses.innerHTML = "";
  tags.forEach((tag) => {
    let span = document.createElement("span");
    span.innerText = tag;

    if (activeHouse === tag) {
      span.style.background = "white";
      span.style.color = "black";
      span.style.border = "1px solid black";
    }

    span.addEventListener("click", () => {
      activeHouse = tag;
      let peopleOfTheHouse =
        got.houses.find((house) => house.name === tag).people || [];
      createUI(peopleOfTheHouse);
      createHouse(allTags);
      input.value = "";
      console.log(input.value)
    });
    houses.append(span);
  });
}

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function createUI(data = allPeople) {
  ul.innerHTML = "";
  data.forEach((value) => {
    let li = document.createElement("li");
    li.classList.add("box");
    let img = document.createElement("img");
    img.classList.add("card");
    img.src = value.image;
    let h2 = document.createElement("h2");
    h2.innerText = value.name;
    h2.classList.add("card");
    let p = document.createElement("p");
    p.innerText = value.description;
    let a = document.createElement("a");
    a.href = value.wikiLink;
    let btn = document.createElement("button");
    btn.innerText = "Learn More!";
    a.append(btn);

    li.append(img, h2, p, a);
    ul.append(li);
  });
}

createUI(allPeople);
createHouse(allTags);

// search input 
function searchName(event){
  let search = event.target.value;
  let filteredPeople = allPeople.filter((people) =>{
   return people.name.toLowerCase().includes(search.toLowerCase());
  })
  createUI(filteredPeople);
  activeHouse = "";
  createHouse(allTags);
}

input.addEventListener("input" , searchName)