let click = document.querySelector(".banner")
let first = document.querySelector(".first")
let second = document.querySelector(".second")


function changeColor(){
    let arr = [1,2,3,4,5,6,7,8,9,"a","b","c"
    ,"d","e","f"];
    let hex = "#"
    for(let i = 0; i < 6; i++){
        hex += arr[Math.floor(Math.random() * arr.length)]
    }
    return  first.style.background = hex;
}

first.addEventListener("click" , changeColor)


function moveColor(){
    let arr = [1,2,3,4,5,6,7,8,9,"a","b","c"
    ,"d","e","f"];
    let hex = "#"
    for(let i = 0; i < 6; i++){
        hex += arr[Math.floor(Math.random() * arr.length)]
    }
    return  second.style.background = hex;
}
second.addEventListener("mousemove" , moveColor)
