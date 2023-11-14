const app = document.getElementById("app");
const canvasSize = 11;

//STEP 1:
const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.id = "colorPicker";
app.appendChild(colorPicker);

//STEP 2 :
function drawPixel() {
  const colorSelect = colorPicker.value;
  this.style.backgroundColor = colorSelect;
}

function resetCanvas() {
  const cells = document.querySelectorAll("#app td");
  cells.forEach((cell) => (cell.style.backgroundColor = ""));
}

function createCanvas() {
  const canvasSizeinput = 11;
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  for (let i = 0; i < canvasSizeinput; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < canvasSizeinput; j++) {
      const cell = document.createElement("td");
      cell.addEventListener("click", drawPixel);
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  app.appendChild(table);

  const resetButton = document.createElement("button");
  resetButton.textContent = "Effacer";
  resetButton.addEventListener("click", resetCanvas);
  app.appendChild(resetButton);
}
createCanvas();
