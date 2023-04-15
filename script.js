const grid = document.querySelector(".grid");
const resolutionButton = document.querySelector(".resolutionButton");
let resolution = 16;
let pixelCount = resolution * resolution;
createGrid();

resolutionButton.addEventListener("click", changeResolution);

function createListeners() {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
  return pixels;
};
function createGrid() {
  for (i = 0; i < pixelCount; i++) {
    div = document.createElement("div");
    div.classList.add("pixel");
    div.setAttribute("style", `width: ${800 / resolution}px; height: ${800 / resolution}px;`)
    grid.appendChild(div);
  }
  createListeners();
};

function removeGrid() {
  pixels.forEach((div) => {
    grid.removeChild(div);
  })
};

function changeResolution() {
  resolution = prompt("How many squares do you want per side?");
  if (resolution > 100 || resolution < 1) {
    alert("Invalid number!");
    return;
  } else {
    removeGrid();
    pixelCount = resolution * resolution;
    createGrid();
  }
};