// toggle between hiding and showing the dropdown content */
function myFunction(e) {
  document.getElementById("myDropdown").classList.toggle("show");
  e.classList.toggle("active");
}

document.addEventListener("click", function (e) {
  var container = document.querySelector(".dropdown");
  if (!container.contains(e.target)) {
    document.getElementById("myDropdown").classList.remove("show");
    document.querySelector(".dropbtn").classList.remove("active");
  }
});

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropdown")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
