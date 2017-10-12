
var openmodal = document.querySelector(".unblock");
var modal = document.querySelector(".form-hidden");
var login = modal.querySelector("[name=login]");
var mail = modal.querySelector("[name=mail]");
var message = modal.querySelector("[name=message]");
var form = modal.querySelector(".form-hidden");
var submit = modal.querySelector(".submit");
var closemodal = document.querySelector(".close");


openmodal.addEventListener("click", function(e) {
    modal.classList.toggle("open");
    login.focus();
});
    

closemodal.addEventListener("click", function() {
    modal.classList.remove("open");
});

console.log(login);

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("Я здесь");
    if(!login.value || !mail.value || message.value) {
        console.log("НЕтттт");}
    else {
        console.log("ДАААА");  
        } 
   
});
