const container = document.querySelector(".container");
const modalBtn = document.querySelector("#myBtn");
const addRoutineBtn = document.querySelector(".add-routine");
const routineContainer = document.querySelector(".routine-container");

//opne modal
routineContainer.addEventListener("click", (e) => {
  if (e.target.id === "myBtn") {
    const routine = e.target.parentElement.parentElement;
    const modal = routine.querySelector(".modal");
    modal.classList.add("show");
    //check the item according to value of day index
    const daysIndex = [];
    const dayValues = routine.querySelectorAll(".day-value");

    dayValues.forEach((value, idx) => {
      if (value.innerHTML) daysIndex.push(idx);
    });
    const days = modal.querySelector(".days");
    const checkboxInputs = days.querySelectorAll("input[type ='checkbox']");
    const timeInputs = days.querySelectorAll("input[type ='text']");
    daysIndex.forEach((index) => {
      checkboxInputs[index].checked = true;
    });
    //close the modal save button
    const saveButton = modal.querySelector(".modal-save-btn");
    saveButton.addEventListener("click", (e) => {
      //get value from checkbox and modal
      const routineData = [];
      checkboxInputs.forEach((checkbox, idx) => {
        if (checkbox.checked) {
          const time = timeInputs[idx].value;
          routineData.push({ idx, time });
        }
      });
      //  clear the list content
      dayValues.forEach((value, idx) => {
        value.innerHTML = "";
      });
      //set value to list content
      routineData.forEach((data) => {
        dayValues[data.idx].innerHTML = data.time;
      });
      //close the modal
      modal.classList.remove("show");
    });
    //close the modal - cancel button
    const cancelButton = modal.querySelector(".modal-cancel-btn");
    cancelButton.addEventListener("click", (e) => {
      modal.classList.remove("show");
    });
  }
});

//handle add routine
addRoutineBtn.addEventListener("click", () => {
  const routine = document.createElement("div");
  routine.classList.add("routine");
  routine.innerHTML = `<div>
    <input type="text" value = "Breakfast" />
  </div>
  <div>
    <button id="myBtn" >Adjust</button>
  </div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div class = "day-value"></div>
  <div id="myModal" class="modal">
    <h1>Choose day</h1>
    <div class="days">
    <div class="days-left">
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

    </div> 

    <div class="days-right">
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

    </div>
    </div>
    
    <div class="modal-btns">
            <button class="modal-save-btn" >Save</button>
            <button class="modal-cancel-btn">Cancel</button>
    </div>
  </div>`;
  routineContainer.appendChild(routine);
});
