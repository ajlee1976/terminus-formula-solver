let selections = new Array();

function solve() {
  if (selections.length != 3) {
    return [0, 0, 0];
  }

  numbers = [
    2 * selections[0] + 11,
    2 * selections[2] + selections[1] - 5,
    Math.abs(selections[1] + selections[2] - selections[0]),
  ];

  document.getElementById(
    "result"
  ).innerHTML = `Your values are:<div class="text-center">${numbers[0]}/${numbers[1]}/${numbers[2]}</div>`;
  document.getElementById("result").classList.remove("hidden");
}

function select(value, src) {
  if (selections.length == 3) {
    return;
  }
  switch (selections.length) {
    case 0:
      letter = "x";
      break;
    case 1:
      letter = "y";
      break;
    case 2:
      letter = "z";
      break;
  }
  selections.push(value);
  document.getElementById(`${letter}_img`).src = src;
  if (selections.length == 3) {
    document.getElementById("calc_button").disabled = false;
  }
}

function clearSelections() {
  selections = new Array();
  document.getElementById(`x_img`).src = "";
  document.getElementById(`y_img`).src = "";
  document.getElementById(`z_img`).src = "";
  document.getElementById("calc_button").disabled = true;
}
