let root = document.querySelector("ul");
let cardsArr = [
  {
    name: "fish",
    img: "img/fish.png",
  },
  {
    name: "fish",
    img: "img/fish.png",
  },
  {
    name: "bot",
    img: "img/bot.png",
  },
  {
    name: "bot",
    img: "img/bot.png",
  },
  {
    name: "tree",
    img: "img/tree.png",
  },
  {
    name: "tree",
    img: "img/tree.png",
  },
  {
    name: "redbot",
    img: "img/redbot.png",
  },
  {
    name: "redbot",
    img: "img/redbot.png",
  },
  {
    name: "img2",
    img: "img/img2.png",
  },
  {
    name: "img2",
    img: "img/img2.png",
  },
  {
    name: "img4",
    img: "img/img4.png",
  },
  {
    name: "img4",
    img: "img/img4.png",
  },
  {
    name: "fox",
    img: "img/fox.png",
  },
  {
    name: "fox",
    img: "img/fox.png",
  },
  {
    name: "fb",
    img: "img/fb.png",
  },
  {
    name: "fb",
    img: "img/fb.png",
  },
];

let delay = 500;

let count = 0;
let firstGuess = "";
let secondGuess = "";
let previousTarget = [];

let game = document.querySelector(".game");
let grid = document.createElement("section");

grid.classList.add("grid");
game.appendChild(grid);
cardsArr.sort(() => 0.5 - Math.random());

cardsArr.forEach((elm) => {
  let card = document.createElement("div");
  // let img = document.createElement("img");
  // img.src = elm.img;
  // card.append(img);
  card.classList.add("card");
  card.dataset.name = elm.name;

  let front = document.createElement("div");
  front.classList.add("front");
  let back = document.createElement("div");
  back.classList.add("back");

  back.style.backgroundImage = `url(${elm.img})`;
  grid.appendChild(card);
  card.append(front);
  card.append(back);
});

const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

const resetGuess = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;
  var selected = document.querySelectorAll(".selected");
  selected.forEach((elm) => {
    elm.classList.remove("selected");
  });
};

function handleEventGrid(event) {
  console.log(event.target.parentNode);
  let clicked = event.target;
  if (
    clicked.nodeName == "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;

      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuess, delay);
      }
    }
    previousTarget = clicked;
  } else {
    setTimeout(resetGuess, delay);
  }
}

grid.addEventListener("click", handleEventGrid);