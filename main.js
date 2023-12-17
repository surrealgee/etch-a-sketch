// HTML Nodes
const root = document.documentElement;
const grid = document.querySelector('.grid-box');
const sizeBtn = document.querySelector('#size-btn');

// Global Variables
let gridSize = 16 * 16;

// Event Listeners
grid.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    markGrid(e.target.id);
})

sizeBtn.addEventListener('click', () => {
    const chosenSize = +prompt("Enter your desired Grid Size (Max: 100): ", 16)
    const newSize = changeGridSize(chosenSize);
    grid.innerHTML = "";
    createGrid(newSize);
})

// Functions
function changeGridSize(gridSize) {
    if (gridSize > 100) gridSize = 100;

    return gridSize * gridSize
}

function createGrid(gridSize) {
    let squareNodes = "";

    setSquareSize(gridSize);

    for (let i = 0; i < gridSize; i++) {
        squareNodes += `<div class="square" id=${"sq" + i}></div>`
    }

    grid.innerHTML = squareNodes;
}

function markGrid(target) {
    let targetSquare = document.getElementById(target);
    targetSquare.classList.toggle('clicked');
}

function setSquareSize(gridSize) {
    const selectedSize = Math.sqrt(gridSize)
    const sizePercent = `${(100 / selectedSize)}%`;

    root.style.setProperty("--square-width", sizePercent);
    root.style.setProperty("--square-height", sizePercent);
}

// Init Call
createGrid(gridSize);