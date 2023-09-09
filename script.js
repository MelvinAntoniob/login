const btnSignIN = document.getElementById("Sign-in"),
 btnSignUP = document.getElementById("Sign-up"),
formRegister = document.querySelector(".register"),
formLongin = document.querySelector(".login");

btnSignIN.addEventListener("click", e =>{
    formRegister.classList.add("hide");
    formLongin.classList.remove("hide")
})


btnSignUP.addEventListener("click", e =>{
    formLongin.classList.add("hide");
    formRegister.classList.remove("hide")
})