const sketchGrid = document.querySelector('.sketch-box');
const sketchSquare = document.createElement('div');
const button = document.querySelector('button');

const createSquare = parent => {
    const square = document.createElement('div');
    square.classList.add('square');
    parent.append(square);
}

const resetSquare = parent => {
    sketchGrid.innerHTML = '';
}

const addGridSquares = num => {
    for (let i = 0; i < (num * num); i++) {
        createSquare(sketchGrid);
    }
}

const editGridSize = num => {
    sketchGrid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
};

const increaseSize = (oldSize, newSize) => {
    addGridSquares(oldSize, newSize);
    editGridSize(newSize);
}

button.addEventListener('click', () => {
    size = prompt('What would you like the size to be? ');
    resetSquare(sketchGrid);
    addGridSquares(size);
    editGridSize(size);
})

let size;