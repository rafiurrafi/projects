const itemContainer = document.querySelector(".dash-tables");
const items = document.querySelectorAll("#online .dash-table");
const paginationContainer = document.querySelector(".pagination--online");

let current_page = 1;
let rows = 2;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedItems = Object.values(items).slice(start, end);
  for (let i = 0; i < paginatedItems.length; i++) {
    wrapper.appendChild(paginatedItems[i]);
  }
}
function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";
  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let button = paginationButton(i, items);
    wrapper.appendChild(button);
  }
}
function paginationButton(page, items) {
  let button = document.createElement("div");
  button.innerText = page;
  button.className =
    "d-flex align-items-center justify-content-center rounded-circle me-3 text-secondary";

  if (current_page === page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    //remove active clss
    const buttons = paginationContainer.querySelectorAll("div");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    if (current_page === page) button.classList.add("active");
    displayList(items, itemContainer, rows, current_page);
    $(".dash-table__details").hide();
  });
  return button;
}
displayList(items, itemContainer, rows, current_page);
setupPagination(items, paginationContainer, rows);
