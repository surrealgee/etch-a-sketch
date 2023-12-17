const grid = document.querySelector('.grid-box');
const sizeBtn = document.querySelector('#size-btn');
let gridSize = 16 * 16;


grid.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    markGrid(e.target.id);
})

sizeBtn.addEventListener('click', () => {
    const chosenSize = +prompt("Enter your desired Grid Size: ", 16)
    const newSize = changeGridSize(chosenSize);
    grid.innerHTML = "";
    createGrid(newSize);
})

function changeGridSize(size) {
    return size * size
}

function createGrid(gridSize) {
    let squareNodes = "";

    for (let i = 0; i < gridSize; i++) {
        squareNodes += `<div class="square" id=${"sq" + i}></div>`
    }

    grid.innerHTML = squareNodes;
}

function markGrid(target) {
    let gridSquare = document.getElementById(target);
    gridSquare.classList.toggle('clicked');
}


createGrid(gridSize);