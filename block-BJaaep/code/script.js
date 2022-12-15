//  

let li = document.querySelectorAll(".first li")

li.forEach((elm, index) => {
    elm.addEventListener("click", (event) => {
      elm.innerText = index + 1;
      setTimeout(() => {
        elm.innerText = "";
      }, 5000);
    });
  });

//   With Event Deligation

let ul = (document.querySelector(".second"))
ul.addEventListener("click", (event) => {   
    if(!event.target.classList.contains('box')) return;
    event.target.innerText = event.target.id;
    setTimeout(() => {
        event.target.innerText = "";
      }, 5000);
  });


