const grid = document.querySelector('.grid-box');
const sizeBtn = document.querySelector('#size-btn');
const root = document.querySelector(':root');
let gridSize = 16 * 16;

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

function changeGridSize(size) {
    if (size > 100) size = 100;
    return size * size
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
    let gridSquare = document.getElementById(target);
    gridSquare.classList.toggle('clicked');
}

function setSquareSize(gridSize) {
    const selectedSize = Math.sqrt(gridSize)
    const sizePercent = `${(100 / selectedSize)}%`;

    root.style.setProperty("--square-width", sizePercent);
    root.style.setProperty("--square-height", sizePercent);
}


createGrid(gridSize);