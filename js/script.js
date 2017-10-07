
var openmodal = document.querySelector(".unblock");
var modal = document.querySelector(".form-hidden");
var closemodal = document.querySelector(".close");


openmodal.addEventListener("click", function() { 
    modal.classList.toggle("open");
});
    

/*closemodal.addEventListener("click", function() {
    modal.classList.remove("open");
});*/
