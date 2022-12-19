let submit = document.querySelector("form")
let small = document.querySelectorAll("small")
console.log(small)

let display = Array.from(small);
console.log(display)


function  isItNumber(str){
    return str.split("").some(item => Number(item));
}

function isItValidMail(str){
    if(str.includes("@") == -1){
        return true;
    }
}

function  isItValidNumber(str){
    return str.split("").every(item => Number(item));
}




// handleSubmit function 

function handleSubmit (event){
    event.preventDefault();
    let usernameHasErr = false;

    let targetElement = event.target.elements;
  

    let username = targetElement.username

    if(username.value == ""){
        username.classList.add("error");
        username.nextElementSibling.innerText = "username is must be filled";
        usernameHasErr = true;
    }else if (username.value.length < 4){
        username.nextElementSibling.innerText = "username can't be less than 4 characters"
        username.classList.add("error");
        usernameHasErr = true;
    }else{
        username.nextElementSibling.innerText = "";
        username.classList.remove("error");
        username.classList.add("success")
    }

    
    let name = targetElement.name;

    if(name.value == ""){
        name.classList.add("error");
        name.nextElementSibling.innerText = "name is must be filled"
         
    }else if(isItNumber(name.value)){
        name.classList.add("error")
        name.nextElementSibling.innerText = "name can't be number"
    }
    else{
        name.nextElementSibling.innerText = "";
        name.classList.remove("error");
        name.classList.add("success")
    }

    let mail = targetElement.mail;

    if(mail.value == ""){
        mail.classList.add("error");
        mail.nextElementSibling.innerText = "mail is must be filled"
         
    }else if(isItValidMail(mail.value)){
        mail.classList.add("error")
        mail.nextElementSibling.innerText = "it is not a valid mail"
    }else if(mail.value.length < 6){
       mail.classList.add("error")
       mail.nextElementSibling.innerText = "mail can't be less than 6 characters"
    }
    else{
        mail.nextElementSibling.innerText = "";
        mail.classList.remove("error");
        mail.classList.add("success")
    }

    let number = targetElement.number;

    if(number.value == ""){
        number.classList.add("error");
        number.nextElementSibling.innerText = "number is must be filled"
         
    }else if(isItValidNumber(number.value)){
        number.classList.add("error")
        number.nextElementSibling.innerText = "it is not a valid number"
    }else if(number.value.length < 7){
        number.classList.add("error")
        number.nextElementSibling.innerText = "number can't be less than 7 characters"

    }
    else{
        number.nextElementSibling.innerText = "";
        number.classList.remove("error");
        number.classList.add("success")
    }

    let password = targetElement.password;

    if(password.value == ""){
        password.classList.add("error");
        password.nextElementSibling.innerText = "password is must be filled"
         
    }
    else{
        password.nextElementSibling.innerText = "";
        password.classList.remove("error");
        password.classList.add("success")
    }

    let confirmPassword = targetElement.confirmPassword;

    if(confirmPassword.value == ""){
        confirmPassword.classList.add("error");
        confirmPassword.nextElementSibling.innerText = "confirmPassword is must be filled"
         
    }
    else{
        confirmPassword.nextElementSibling.innerText = "";
        confirmPassword.classList.remove("error");
        confirmPassword.classList.add("success")
    }

    if(password.value !== confirmPassword.value){
        password.classList.remove("error");
        confirmPassword.classList.add("error")
        confirmPassword.nextElementSibling.innerText = "Password not matched"
    }

    if(display.every(ele => ele.innerText == "")){
        alert("User added Successfully! 😍")
    }

  }

// add event on submit 

submit.addEventListener("submit", handleSubmit)




