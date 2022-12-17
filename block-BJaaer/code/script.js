let form = document.querySelector("form")

let userInfo = {};

form.addEventListener("submit",function (event){
    event.preventDefault();
    userInfo.name = form.elements.text.value
    userInfo.email = form.elements.email.value
    userInfo.gender = form.elements.value
    userInfo.name = form.elements.text.value

    console.log(userInfo)
      
})