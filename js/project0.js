//  create board in html/css
// 9 cells
// X or O to appear once clicked in cells and print/stay
// alternate between X and O
//winning combinations 
// once all cells are filled, message to pop up '' win or Draw 
// restart button  
// ^ to clear all X,O's from the board 
// ^ clear the message pop up for win or draw 

const statusDisplay = document.querySelector('.statusText');
// global variables to control game
let currentPlayer = 'X';
let gameActive = true;
let board = [" ", " ", " ", " ", " ", " ", " ", " ",  " "];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.restartButton').addEventListener('click', handleRestartGame);


//  need event listener for each cell for when the user clicks on the cell //event paramater
// for loop?
// function handleCellClick(clickedCellEvent) {   
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(
//       clickedCell.getAttribute('data-cell-index')
//     );

//     if (board[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();
   
// };
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    
    if (board[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    
    handleCellPlayed(clickedCell, clickedCellIndex);

    
    handleResultValidation();


    currentPlayer = currentPlayer === "X" ? "O" : "X";
}




function handleCellPlayed(clickedCell, clickedCellIndex) {
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    clickedCell.classList.add(`cell-${currentPlayer}`);
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningCombos.length; i++) {
      const winningCombo = winningCombos[i];
      let a = board[winningCombo[0]];
      let b = board[winningCombo[1]];
      let c = board[winningCombo[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
  
    if (roundWon) {
      statusDisplay.innerHTML = winningMessage();
      gameActive = false;
      return;
    }
  
    let roundDraw = !board.includes('');
    if (roundDraw) {
      statusDisplay.innerHTML = drawMessage();
      gameActive = false;
      return;
    }
  
    handlePlayerChange();
  }
  
  function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn();
  };


// function handleCellPlayed(clickedCell, clickedCellIndex) {
    
//     board[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }
// //winning combinations cells on table
const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6], 
    [0, 4, 8]
]
// // [0, 1, 2] , [3, 4, 5], [ 6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
 // if winningCombos === false return 'message'



// if statement to change the HTML to swap the symbol from X to O (if, else)


function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    // statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
} 


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restartButton').addEventListener('click', handleRestartGame);