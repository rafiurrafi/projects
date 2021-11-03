const container = document.querySelector(".container");
const modalBtn = document.querySelector("#myBtn");
const addRoutineBtn = document.querySelector(".add-routine");
const modal = document.querySelector(".modal");
console.log(addRoutineBtn);
modalBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
});
