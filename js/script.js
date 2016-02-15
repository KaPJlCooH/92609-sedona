var openClose = document.querySelector(".btn-hotels");
var popup = document.querySelector(".booking-form");

openClose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("booking-form-show");
});
