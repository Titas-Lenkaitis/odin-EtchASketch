const grid = document.querySelector(".grid");
const resolutionButton = document.querySelector(".resolutionButton");
const rainbowButton = document.querySelector(".rainbowButton");
const shaderButton = document.querySelector(".shadeButton");
let resolution = 16;
createGrid();

resolutionButton.addEventListener("click", changeResolution);
rainbowButton.addEventListener("click", toggleRainbowMode);

function createListeners(rgbValue1, rgbValue2, rgbValue3) {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => div.style.backgroundColor = "rgb(" + rgbValue1 + "," + rgbValue2 + "," + rgbValue3 + ")");
    });
  return pixels;
};

function removeListeners() {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.removeEventListener("mouseover", () => div.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")");
    div.removeEventListener("mouseover", () => {
      div.style.backgroundColor = "rgb(" + randInt() + "," + randInt() + "," + randInt() + ")";
    });
    });
}

function createGrid() {
  for (i = 0; i < (resolution * resolution); i++) {
    div = document.createElement("div");
    div.classList.add("pixel");
    div.setAttribute("style", `width: ${800 / resolution}px; height: ${800 / resolution}px;`)
    grid.appendChild(div);
  }
  createListeners(0,0,0)
};

function removeGrid() {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => grid.removeChild(div))
};

function changeResolution() {
  resolution = prompt("How many squares do you want per side?");
  if (resolution > 100 || resolution < 1) {
    alert("Invalid number!");
    return;
  } else {
    removeGrid();
    createGrid();
  }
};

function toggleRainbowMode() {
  removeListeners();
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "rgb(" + randInt() + "," + randInt() + "," + randInt() + ")";
    });
  });
  rainbowButton.removeEventListener("click", toggleRainbowMode);
  rainbowButton.addEventListener("click", toggleRainbowModeOff);
}
function randInt() {
  return Math.floor(Math.random() * 256);
}

function toggleRainbowModeOff() {
  removeListeners();
  createListeners(0,0,0);
  rainbowButton.removeEventListener("click", toggleRainbowModeOff);
  rainbowButton.addEventListener("click", toggleRainbowMode);
}