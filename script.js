const grid = document.querySelector(".grid");
const resolutionButton = document.querySelector(".resolutionButton");
const rainbowButton = document.querySelector(".rainbowButton");
const eraserButton = document.querySelector(".eraserButton");
let resolution = 16;
createGrid();

resolutionButton.addEventListener("click", changeResolution);
rainbowButton.addEventListener("click", toggleRainbowMode);
eraserButton.addEventListener("click", toggleEraserMode);

function createListeners(rgbValue1, rgbValue2, rgbValue3) {
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => div.style.backgroundColor = "rgb(" + rgbValue1 + "," + rgbValue2 + "," + rgbValue3 + ")");
    });
  return pixels;
};

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
  resetEraserButton();
  pixels = document.querySelectorAll(".grid div");
  pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "rgb(" + randInt() + "," + randInt() + "," + randInt() + ")";
    });
  });
  rainbowButton.removeEventListener("click", toggleRainbowMode);
  rainbowButton.addEventListener("click", toggleRainbowModeOff);
  rainbowButton.classList.remove("button");
  rainbowButton.classList.add("active");
}
function randInt() {
  return Math.floor(Math.random() * 256);
}

function toggleRainbowModeOff() {
  createListeners(0,0,0);
  resetRainbowButton();
}

function toggleEraserMode() {
  resetRainbowButton();
  createListeners(255,255,255);
  eraserButton.removeEventListener("click", toggleEraserMode);
  eraserButton.addEventListener("click", toggleEraserModeOff);
  eraserButton.classList.remove("button");
  eraserButton.classList.add("active");
}

function toggleEraserModeOff() {
  createListeners(0,0,0);
  resetEraserButton();
}

function resetRainbowButton() {
  rainbowButton.classList.remove("active");
  rainbowButton.classList.add("button");
  rainbowButton.removeEventListener("click", toggleRainbowModeOff);
  rainbowButton.addEventListener("click", toggleRainbowMode);
}

function resetEraserButton() {
  eraserButton.classList.remove("active");
  eraserButton.classList.add("button");
  eraserButton.removeEventListener("click", toggleEraserModeOff);
  eraserButton.addEventListener("click", toggleEraserMode);
}