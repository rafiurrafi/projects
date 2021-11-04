const container = document.querySelector(".container");
const modalBtn = document.querySelector("#myBtn");
const addRoutineBtn = document.querySelector(".add-routine");
const routineContainer = document.querySelector(".routine-container");
function openModal(e) {
  const parent = e.parentElement.parentElement;
  console.log(parent);
  const modal = parent.querySelector("#myModal");
  modal.classList.toggle("show");

  const days = parent.querySelectorAll(".day");
  //checked the checkbox input
  const ids = getIds(e);
  ids.forEach((id) => {
    const checkbox = days[id].querySelector("input[type = 'checkbox']");
    checkbox.checked = true;
  });
}

function closeModal(e) {
  const parent = e.parentElement;
  const modal = parent.querySelector(".modal");
  modal.classList.toggle("show");
}
function saveModal(e) {
  const parent = e.parentElement.parentElement;
  const grantParent = parent.parentElement.parentElement;
  const days = parent.querySelectorAll(".day");
  const routineDay = document.querySelectorAll(".day-value");

  //insert selected input to an array to display on routine list
  const indexs = [];
  days.forEach((day, idx) => {
    const checkbox = day.querySelector("input[type = 'checkbox']");
    const time = day.querySelector("input[type = 'text']");

    if (checkbox.checked) {
      indexs.push({ idx, value: time.value });
    }
  });
  //clear the list item
  routineDay.forEach((day) => {
    day.innerHTML = "";
  });
  // insert value to list
  indexs.forEach((index) => {
    routineDay[index.idx].innerHTML = index.value;
  });

  closeModal(grantParent);
}
function getIds(e) {
  const routine = e.parentElement.parentElement.parentElement.parentElement;
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
  <button id="myBtn" onclick = "openModal(this)">Adjust</button>
</div>
<div class = "day-value"></div>
<div class = "day-value"></div>
<div class = "day-value"></div>
<div class = "day-value">09:30</div>
<div class = "day-value"></div>
<div class = "day-value">09:30</div>
<div class = "day-value"></div>
<div id="myModal" class="modal">
  <h1>Choose day</h1>
  <div class="days">
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Saturday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Sunday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Monday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Tuesday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Wednesday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Thursday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="day">
    <div>
      <input type="checkbox" />
      <label for="">Friday</label>
    </div>
    <div><input type="text" value = "09:30" /></div>
  </div>
  <div class="modal-btns">
          <button class="modal-save-btn" onclick = "saveModal(this)">Save</button>
          <button class="modal-cancel-btn" onclick = "closeModal(this.parentElement.parentElement.parentElement)">Cancel</button>
        </div>
</div>`;
  routineContainer.appendChild(routine);
});
