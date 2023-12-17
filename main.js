const grid = document.querySelector('.grid-box');

function createGrid() {
    let squareNodes = "";
    let gridSize = 16 * 16;

    for (let i = 0; i < gridSize; i++) {
        squareNodes += `<div class="square"></div>`
    }

    grid.innerHTML = squareNodes;
}


createGrid();