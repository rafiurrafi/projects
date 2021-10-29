const addButton = document.querySelector(".action__add-btn");

const listContainer = document.querySelector("#table");

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
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);

// Open modal
function openModal() {
  modal.style.display = "block";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Click outside and close
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
