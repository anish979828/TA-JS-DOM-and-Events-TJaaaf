let body = document.body
let main = document.createElement("main")
body.append(main)  


function changeRandomNumber(num){
    return Math.floor(Math.random() * num)
}

for(let i = 1; i <= 500; i++){
    let div = document.createElement("div")
    div.classList.add("box")
    let h2 = document.createElement("h2")
    h2.innerText = changeRandomNumber(500);
    div.append(h2)
    main.append(div)
}

let hexElement = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
function changeRandomColor(){
    let hex = "#"
    for(let i = 0; i < 6; i++){
        hex += hexElement[changeRandomNumber(hexElement.length)]
    }
    return hex;
}

let allBoxes  = document.querySelectorAll(".box")


function colorMove() {
   allBoxes.forEach(ele => { 
   ele.style.background = changeRandomColor()
   ele.querySelector("h2").innerText = changeRandomNumber(500)})
}

main.addEventListener("mousemove" ,colorMove)

heading.addEventListener("mousemove" , changeRandomNumber(500))


