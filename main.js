// Variables

const containerEl = document.getElementById("canvas-el");
const sliderEl = document.getElementById("slider-el");

const rootEl = document.querySelector(":root");
const rootStyles = getComputedStyle(rootEl);
let columns = rootStyles.getPropertyValue("--grid-columns");
let rows = rootStyles.getPropertyValue("--grid-rows");

// Functions

function getSize(gridSize) {
    gridSize = sliderEl.value;
    containerEl.innerHTML = "";
    adjustGridCanvas(gridSize);
    renderGrid(gridSize, gridSize);
}

function renderGrid(columns, rows) {
    for (let i = 0; i < (columns * rows); i++) {
        const grid = document.createElement("div");
        grid.classList.add("cell");
        containerEl.appendChild(grid);
    }
}

function adjustGridCanvas(gridSize) {
    rootEl.style.setProperty("--grid-columns", gridSize);
    rootEl.style.setProperty("--grid-rows", gridSize);
}

// Event Listeners

window.addEventListener("load", getSize);

sliderEl.addEventListener("change", getSize);

containerEl.addEventListener("mouseover", function (e) {
    return e.target.classList.add("black");
});


