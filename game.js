const sketchGrid = document.querySelector('.sketch-box');
const button = document.querySelector('button');

const createSquare = parent => {
    const square = document.createElement('div');
    square.classList.add('square');
    parent.append(square);
}

const resetSquare = () => {
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

let size;

button.addEventListener('click', () => {
    size = prompt('What would you like the size to be? ');

    while (size > 100) {
        size = prompt('Please input a smaller size.');
    }

    resetSquare(sketchGrid);
    addGridSquares(size);
    editGridSize(size);
})

sketchGrid.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'black';
})
