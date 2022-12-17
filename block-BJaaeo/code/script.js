var box = document.querySelectorAll(".box")
let display = document.querySelector(".display")
let clear = document.querySelector(".clear")
let eqaul = document.querySelector(".equal")
const back= document.querySelector(".back")

box.forEach(ele => ele.addEventListener("click", function(){
    display.innerText += ele.innerText
}))

clear.addEventListener("click" , function(){
    display.innerText = ""
})

eqaul.addEventListener("click" , (event) => {
    display.innerText=eval(display.innerText)
})

back.addEventListener('click',() => {
    display.innerText = display.innerText.slice(0,-1);
})





