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
    if (modal.classList.contains("open")) modal.classList.remove("open");
    modal.style.display = "none";
    container.classList.remove("blur");
  }
};
// Time picker
function activate() {
  //   document.head.insertAdjacentHTML(
  //     "beforeend",
  //     `
  // 		<style>
  // 			.time-picker {
  // 				position: absolute;
  // 				display: inline-block;
  // 				padding: 10px;
  // 				background: #eeeeee;
  // 				border-radius: 6px;
  // 			}

  // 			.time-picker__select {
  // 				-webkit-appearance: none;
  // 				-moz-appearance: none;
  // 				appearance: none;
  // 				outline: none;
  // 				text-align: center;
  // 				border: 1px solid #dddddd;
  // 				border-radius: 6px;
  // 				padding: 6px 10px;
  // 				background: #ffffff;
  // 				cursor: pointer;
  // 				font-family: 'Heebo', sans-serif;
  // 			}
  // 		</style>
  // 	`
  //   );

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
