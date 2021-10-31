const addButton = document.querySelector(".action__add-btn");
const listContainer = document.querySelector("#table");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

addButton.addEventListener("click", (e) => {
  const list = document.createElement("tr");
  list.innerHTML = `<td><input type="text" value="breakfast" /></td>
  <td><button  id="modalBtn" class="button" onclick = "openModal();addContent(this)">Adjust time</button></td>
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
function closeModal() {
  modal.classList.remove("open");
  container.classList.remove("blur");
}
// $( '.close' ).click(function() {
//     $( '.modal' ).removeClass( 'open' );
//     $( '.cont' ).removeClass( 'blur' );
//   });
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    // if (modal.classList.contains("open")) modal.classList.remove("open");
    // modal.style.display = "none";
    // container.classList.remove("blur");
    modal.classList.remove("open");
    container.classList.remove("blur");
  }
};
// Time picker
function activate() {
  document.querySelectorAll(".time-pickable").forEach((timePickable) => {
    let activePicker = null;

    timePickable.addEventListener("focus", () => {
      if (activePicker) return;

      activePicker = show(timePickable);

      const onClickAway = ({ target }) => {
        if (
          target === activePicker ||
          target === timePickable ||
          activePicker.contains(target)
        ) {
          return;
        }

        document.removeEventListener("mousedown", onClickAway);
        document.body.removeChild(activePicker);
        activePicker = null;
      };

      document.addEventListener("mousedown", onClickAway);
    });
  });
}

function show(timePickable) {
  const picker = buildPicker(timePickable);
  const { bottom: top, left } = timePickable.getBoundingClientRect();

  picker.style.top = `${top}px`;
  picker.style.left = `${left}px`;

  document.body.appendChild(picker);

  return picker;
}

function buildPicker(timePickable) {
  const picker = document.createElement("div");
  const hourOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
    numberToOption
  );
  const minuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(
    numberToOption
  );

  picker.classList.add("time-picker");
  picker.innerHTML = `
		<select class="time-picker__select">
			${hourOptions.join("")}
		</select>
		:
		<select class="time-picker__select">
			${minuteOptions.join("")}
		</select>
		<select class="time-picker__select">
			<option value="am">am</option>
			<option value="pm">pm</option>
		</select>
	`;

  const selects = getSelectsFromPicker(picker);

  selects.hour.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );
  selects.minute.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );
  selects.meridiem.addEventListener(
    "change",
    () => (timePickable.value = getTimeStringFromPicker(picker))
  );

  if (timePickable.value) {
    const { hour, minute, meridiem } = getTimePartsFromPickable(timePickable);

    selects.hour.value = hour;
    selects.minute.value = minute;
    selects.meridiem.value = meridiem;
  }

  return picker;
}

function getTimePartsFromPickable(timePickable) {
  const pattern = /^(\d+):(\d+) (am|pm)$/;
  const [hour, minute, meridiem] = Array.from(
    timePickable.value.match(pattern)
  ).splice(1);

  return {
    hour,
    minute,
    meridiem,
  };
}

function getSelectsFromPicker(timePicker) {
  const [hour, minute, meridiem] = timePicker.querySelectorAll(
    ".time-picker__select"
  );

  return {
    hour,
    minute,
    meridiem,
  };
}

function getTimeStringFromPicker(timePicker) {
  const selects = getSelectsFromPicker(timePicker);

  return `${selects.hour.value}:${selects.minute.value} ${selects.meridiem.value}`;
}

function numberToOption(number) {
  const padded = number.toString().padStart(2, "0");

  return `<option value="${padded}">${padded}</option>`;
}

activate();

// Adjust time
// const adjustBtn = document.querySelectorAll(".adjust-time-btn");

// adjustBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const mainParent = e.target.parentElement.parentElement;
//     const dayIndex = mainParent.querySelectorAll("td");
//     console.log(dayIndex);
//     openModal();
//     // working with modal value
//     const checkboxInputs = document.querySelectorAll(
//       ".modal .day input[type = 'checkbox']"
//     );
//     checkboxInputs.forEach((input) => {
//       input.addEventListener("change", (e) => {
//         if (input.checked) {
//           const id = +e.target.id + 2;
//           dayIndex[id].innerHTML = "Hello";
//         }
//       });
//     });
//   });
// });

function addContent(e) {
  const mainParent = e.parentElement.parentElement;
  const dayIndex = mainParent.querySelectorAll("td");

  openModal();
  // working with modal value
  const checkboxInputs = document.querySelectorAll(
    ".modal .day input[type = 'checkbox']"
  );
  // checkboxInputs.forEach((input) => {
  //   input.checked = false;
  //   mainParent.days = [1,2,6];
  //   input.checked =
  // });
  for (let i = 0; i < checkboxInputs.length; i++) {
    checkboxInputs[i].checked = false;
    mainParent.days = [1, 2, 6];
    mainParent.days.forEach((day) => {
      checkboxInputs[day].checked = true;
    });
  }
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("save-btn")) {
      const selected = [];
      for (let i = 0; i < checkboxInputs.length; i++) {
        if (checkboxInputs[i].checked) selected.push(i);
      }
      dayIndex.forEach((day, index) => {
        if (index > 1) day.textContent = "";
      });
      selected.forEach((item) => {
        dayIndex[item + 2].textContent = "hello";
      });
    }
  });
}
