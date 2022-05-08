const itemContainer = document.querySelector(".dash-tables--online");
const items = document.querySelectorAll("#online .dash-table-container");
const paginationContainer = document.querySelector(".pagination--online");

// inperson
const itemPersonContainer = document.querySelector(".dash-tables--person");
const itemsPerson = document.querySelectorAll("#inperson .dash-table");
const paginationContainerPerson = document.querySelector(
  ".pagination--inperson"
);

//hybrid
const itemContainerHybrid = document.querySelector(".dash-tables--hybrid");
const itemsHybrid = document.querySelectorAll("#hybrid .dash-table");
const paginationContainerHybrid = document.querySelector(".pagination--hybrid");

let current_page = 1;
let rows = 4;

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
function setupPagination(items, wrapper, rowsPerPage, itemContainer) {
  wrapper.innerHTML = "";
  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let button = paginationButton(i, items, wrapper, itemContainer);
    wrapper.appendChild(button);
  }
}
function paginationButton(page, items, paginationWrapper, itemContainer) {
  let button = document.createElement("div");
  button.innerText = page;
  button.className =
    "d-flex align-items-center justify-content-center rounded-circle me-3 text-secondary";

  if (current_page === page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    //remove active clss
    const buttons = paginationWrapper.querySelectorAll("div");
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
setupPagination(items, paginationContainer, rows, itemContainer);

// inperson

displayList(itemsPerson, itemPersonContainer, rows, current_page);
setupPagination(
  itemsPerson,
  paginationContainerPerson,
  rows,
  itemPersonContainer
);

// hybrid
displayList(itemsHybrid, itemContainerHybrid, rows, current_page);
setupPagination(
  itemsHybrid,
  paginationContainerHybrid,
  rows,
  itemContainerHybrid
);
