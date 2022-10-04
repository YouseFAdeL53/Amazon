// click on toggle show sidebar

let toggle = document.getElementById("toggle");
let sidebar = document.querySelector(".sidebar");

toggle.onclick = function () {
  sidebar.classList.toggle("show-side");
}