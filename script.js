const grid = document.querySelector(".grid");
let resolution = 100;
let pixelCount = resolution * resolution;
createGrid();

function createListeners() {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  })
}
function createGrid() {
  for (i = 0; i < pixelCount; i++) {
    div = document.createElement("div");
    div.classList.add("pixel");
    div.setAttribute("style", `width: ${800 / resolution}px; height: ${800 / resolution}px;`)
    grid.appendChild(div);
  }
  createListeners();
};