const container = document.querySelector(".container");
const modalBtn = document.querySelector("#myBtn");
const addRoutineBtn = document.querySelector(".add-routine");
// const modal = document.querySelector(".modal");
const routineContainer = document.querySelector(".routine-container");
function openModal(e) {
  const parent = e.parentNode.parentNode;
  const modal = parent.querySelector(".modal");
  modal.classList.toggle("show");

  const days = parent.querySelectorAll(".day");
  //check the checkbox
  const ids = getIds(e);
  //checked the checkbox id = [1, 4]

  ids.forEach((id) => {
    const checkbox = days[id].querySelector("input[type = 'checkbox']");
    checkbox.checked = true;
  });
}
function closeModal(e) {
  const parent = e.parentNode;
  const modal = parent.querySelector(".modal");
  modal.classList.toggle("show");
}
function saveModal(e) {
  const parent = e.parentNode.parentNode;
  const grantParent = parent.parentNode.parentNode;
  const days = parent.querySelectorAll(".day");
  const routineDay = document.querySelectorAll(".day-value");

  const indexs = [];
  days.forEach((day, idx) => {
    const checkbox = day.querySelector("input[type = 'checkbox']");
    if (checkbox.checked) indexs.push(idx);
  });
  //   routineDay.forEach((day) => {
  //     day.innerHTML = "";
  //   });
  closeModal(grantParent);
}
function getIds(e) {
  const routine = e.parentNode.parentNode.parentNode.parentNode;
  const routineDay = routine.querySelectorAll(".day-value");
  const ids = [];
  routineDay.forEach((day, idx) => {
    if (day.innerHTML) ids.push(idx);
  });
  return ids;
}
//handle add routine
addRoutineBtn.addEventListener("click", () => {
  const routine = document.createElement("div");
  routine.classList.add("routine");
  routine.innerHTML = `<div>
  <input type="text" />
</div>
<div>
  <button id="myBtn" onclick ="openModal(this)">Adjust</button>
</div>
<div class = "day-value"></div>
<div class = "day-value"></div>
<div class = "day-value"></div>
<div class = "day-value">1</div>
<div class = "day-value"></div>
<div class = "day-value">1</div>
<div class = "day-value"></div>
<div id="myModal" class="modal">
  <h1>Choose day</h1>
  <div class="days">
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Saturday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Sunday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Monday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Tuesday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Wednesday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Thursday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Friday</label>
    </div>
    <div><input type="text" /></div>
  </div>
  <div class="modal-btns">
          <button class="modal-save-btn" onclick = "saveModal(this)">Save</button>
          <button class="modal-cancel-btn" onclick = "closeModal(this.parentNode.parentNode.parentNode)">Cancel</button>
        </div>
</div>`;
  routineContainer.appendChild(routine);
});
