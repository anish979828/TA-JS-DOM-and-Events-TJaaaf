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
    // span.style.background = "red";

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

function handleEvent(event) {
  let searchName = event.target.value;
  let filterdPeople = allPeople.filter((n) =>
    n.name.toLowerCase().includes(searchName.toLowerCase())
  );
  createUI(filterdPeople);
  console.log(filterdPeople);
}

createUI(allPeople);
createHouse(allTags);
input.addEventListener("input", handleEvent);
//allHouse();