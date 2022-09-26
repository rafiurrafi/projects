const cart = [
  {
    name: "Bee Fil 2 in 1",
    image: "images/products/Axeos.jpeg",
    price: 200,
    quantity: 1,
  },
  {
    name: "Standardised Gutta-Percha",
    image: "images/products/Standardised Gutta-Percha.jpg",
    price: 149,
    quantity: 2,
  },
];

//select dom
const tableBody = document.querySelector(".section-cart tbody");

function createRow(item) {
  const row = document.createElement("tr");
  console.log("Hello");
  row.innerHTML = `
    <td data-label="Item">
    <div class="d-flex align-items-center">
      <img src="${item.image}" alt="" />
      <p class="mb-0 ms-2">${item.name}</p>
    </div>
  </td>
  <td data-label="Price">${item.price}</td>
  <td data-label="Quantity">
    <div class="d-flex justify-content-around table-quantity">
      <div class="p-2" id = "incrementQuantity" onclick = "increment(${item})">+</div>
      <div class="px-3 py-2">${item.quantity}</div>
      <div class="p-2" id = "decrementQuantity" onclick = "decrement(${item})">-</div>
    </div>
  </td>
  <td data-label="Subtotal">${item.price * item.quantity}</td>
    `;
  tableBody.append(row);
}
cart.forEach(createRow);

function increment(item) {
  console.log(item);
}
