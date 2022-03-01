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
// dropdown for sort
function sortToggle(e) {
  document.getElementById("sortDropdown").classList.toggle("show");
  e.classList.toggle("active");
}

document.addEventListener("click", function (e) {
  var container = document.querySelector(".sort-container");
  if (!container.contains(e.target)) {
    document.getElementById("sortDropdown").classList.remove("show");
    document.querySelector(".sortDropdownBtn").classList.remove("active");
  }
});

// dropdown for category
function categoryToggle(e) {
  document.getElementById("category").classList.toggle("show");
  e.classList.toggle("active");
}

document.addEventListener("click", function (e) {
  var container = document.querySelector("#category-container");
  if (!container.contains(e.target)) {
    document.getElementById("category").classList.remove("show");
    document.querySelector(".categoryBtn").classList.remove("active");
  }
});

// dropdown for Export
function exportToggle(e) {
  document.getElementById("export").classList.toggle("show");
  e.classList.toggle("active");
}

document.addEventListener("click", function (e) {
  var container = document.querySelector(".export-container");
  if (!container.contains(e.target)) {
    document.getElementById("export").classList.remove("show");
    document.querySelector(".exportBtn").classList.remove("active");
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
