const gridSizeButton = document.querySelector('#grid-size-button');

gridSizeButton.addEventListener('click', () => {

    let rowLength = prompt('How Many Squares Per Row?: ');
    if (rowLength > 80){ rowLength = 80;}
    let numberOfRows = rowLength;
    removeGrid();
    generateGrid(rowLength, numberOfRows);
});

function removeGrid(){

    let gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach((row) =>{
        row.remove();
    })

}

function generateGrid(rowLength, numberOfRows){

console.log ("HELLO? 1");

const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer);

for (let i = 0; i < numberOfRows; i++)
{

    console.log("Row: " + i);

const rowContainer = document.createElement('div');
rowContainer.classList.add('grid-row');
gridContainer.appendChild(rowContainer);

for (let j = 0; j < rowLength; j++)
{
    console.log("Square: " + j);
    const gridSquare =document.createElement('div');
    gridSquare.classList.add('grid-square');

    rowContainer.appendChild(gridSquare);
}


}



const gridSquares = document.querySelectorAll('.grid-square');

gridSquares.forEach((square) => {

    square.addEventListener('mouseenter', () => {

        square.style.backgroundColor = 'rgb(255, 0, 0)';
    });

    square.addEventListener('mouseleave', () => {

        square.style.backgroundColor = 'rgb(125, 0, 0)';

       // animateColorTransition(square, 'rgb(146, 146, 146)');
    });
});

}



function animateColorTransition(element, targetColor)
{
    const currentComputedStyle = getComputedStyle(element);
    let currentColor = currentComputedStyle ? currentComputedStyle.backgroundColor : 'rgba(0, 0, 0)';

    console.log("Current Computed Style: " + currentComputedStyle.backgroundColor);
    console.log("Current Color: " + currentColor);
    console.log("Target Color: " + targetColor);

    for(let i = 0; i < 146 ; i++)
    {
        currentColor = ('rgb(' + i + ',' + i + ' , ' + i + ')');
        element.style.backgroundColor = ('rgb(' + i + ',' + i + ' , ' + i + ')');
        console.log(currentColor);
    }

}
