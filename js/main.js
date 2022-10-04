// Click On Toggle Make Class On Link

let toggle = document.getElementById("toggle");
let links = document.querySelector(".links");

toggle.addEventListener("click", function () {
  links.classList.toggle("show-links")
});





let myImg = document.querySelector(".img");
let allImg = document.querySelectorAll(".first .box .image img");

allImg.forEach((img) => {
  img.addEventListener("click", function () {
    myImg.src = this.src;
  })
})