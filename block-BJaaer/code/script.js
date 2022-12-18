let form = document.querySelector("form")
let article = document.querySelector(".modal")
let close = document.querySelector(".btn")

let userInfo = {};

form.addEventListener("submit",function (event){
    event.preventDefault();
    userInfo.name = form.elements.text.value
    userInfo.email = form.elements.email.value
    userInfo.gender = form.elements.gender.value
    userInfo.color = form.elements.color.value
    userInfo.choice = form.elements.choice.value
    userInfo.range = form.elements.range.value
    userInfo.book = form.elements.book.value
    userInfo.terms = form.elements.terms.value
    console.log(userInfo)
    article.classList.add("open")
    output(userInfo)

    close.addEventListener("click", function(){
        article.classList.remove("open")
    })
    console.log(userInfo)
  
})

function output(userObject){
    let h1 = document.createElement("h1")
    h1.innerText = `Hello ${userObject.name}
    `
    let email = document.createElement("p")
    email.innerText = `Email: ${userObject.email}`
    let choice  = document.createElement("p")
    choice.innerText = `you love : ${userObject.gender}`
    let color  = document.createElement("p")
    color.innerText = `fav color: ${userObject.color}`
    let range  = document.createElement("p")
    range.innerText = `Rating: ${userObject.range}`
    let book  = document.createElement("p")
    book.innerText = `Book Genre: ${userObject.book}`
    let terms  = document.createElement("p")
    if(userObject.terms == "on"){
        terms.innerText = " ✌️You agree to Terms and Conditions"
    }
  
    let layout = document.querySelector(".output")
    layout.append(h1,email,color,choice,range,book,terms)
}



