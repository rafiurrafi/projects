const addButton = document.querySelector(".action__add-btn");
const listContainer = document.querySelector("#table");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

addButton.addEventListener("click", (e) => {
  const list = document.createElement("tr");
  list.innerHTML = `<td><input type="text" value="breakfast" /></td>
  <td><button  id="modalBtn" class="button" onclick = "openModal()">Adjust time</button></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>`;
  listContainer.append(list);
});

// Get modal element

function openModal() {
  modal.classList.add("open");
  modal.style.display = "flex";
  container.classList.add("blur");
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    if (modal.classList.contains("open")) modal.classList.remove("open");
    modal.style.display = "none";
    container.classList.remove("blur");
  }
};
// $(".modal").addClass("open");

// if ($(".modal").hasClass("open")) {
//   $(".container").addClass("blur");
// }
// $(".close").click(function () {
//   $(".modal").removeClass("open");
//   $(".cont").removeClass("blur");
// });
