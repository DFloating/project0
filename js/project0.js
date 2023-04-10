
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('.statusText')
const restartButton = document.querySelector('.restartButton');

// Initialize variables
let currentPlayer = 'X';
let gameEnded = false;
// let gameEnded === true; 
let options = ["", "", "", "", "", "", "", "", ""];

// Add event listener to each cell
function startGame() {
for (let i = 0; i < cells.length; i++) { //Run a for Loop for grid of cells
    cells[i].addEventListener('click', () => { //Adding event listener to each individual cell. 
        if (!gameEnded && cells[i].textContent === '') { // If gameEnded === false, && the indivudal cell that we click text content is not occupied by anything
        cells[i].textContent = currentPlayer; // occupy with currentPlayer
        if (checkForWin()) { //calling below function, checking for winner
            console.log(`${currentPlayer} won`); // consoling that player has won
            gameEnded = true;
            statusText.textContent = `${currentPlayer} won`
             // we are setting the gameEnded to true which doesn't allow any further boxes to be click 
        } else if (checkForDraw()) { //calling below function to check for draw
            console.log('Draw');
            gameEnded = true;
            statusText.textContent = `Draw`
        } else {
            if (currentPlayer === "X") { //After click, checking to see if player1 is current player,
                currentPlayer = "O"; //if so, switch to player 2
              } else {
                currentPlayer = "X"; //opposite of above 
              }
              statusText.textContent = `${currentPlayer}'s turn`
        };
        };
        restartButton.addEventListener("click", restartGame);
    });
    
};
}

// Check if there is a win
function checkForWin() { 
    const winningCombos = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6],  
    ];

    // important for cell to not be empty
  return winningCombos.some(combo => {
    const [a, b, c] = combo; // Array destructuring, assigning values to a, b and c in relevance to the arrays nested in the WinningCombo Array
    return cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent; //checking to see if the first index position is not empty, and the other index positions are equal to the first in terms of text content.
  });
//    statusText.textContent = `${currentPlayer} won!`;
}

// Check if there is a draw
function checkForDraw() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}
//creating a new array, and with the every, we're checking every index position with a loop, and then we're checking to see if the textContent is not empty for all of them, and a winning condition hasn't been met. 


function restartGame() {
    currentPlayer = 'X';
    if (gameEnded = true && cells.textContent === '') {
        return options;
    } 
    statusText.textContent = `Start Game`;
    cells.forEach(cell => cell.textContent = '');
    
               
} ;



startGame();