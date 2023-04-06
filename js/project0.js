// //  create board in html/css
// // 9 cells
// // X or O to appear once clicked in cells and print/stay
// // alternate between X and O
// //winning combinations 
// // once all cells are filled, message to pop up '' win or Draw 
// // restart button  
// // ^ to clear all X,O's from the board 
// // ^ clear the message pop up for win or draw 

// const statusDisplay = document.querySelector('.statusText');
// // global variables to control game
// let currentPlayer = 'X';
// let gameActive = true;
// let board = [" ", " ", " ", " ", " ", " ", " ", " ",  " "];

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// // document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// // document.querySelector('.restartButton').addEventListener('click', handleRestartGame);


// //  need event listener for each cell for when the user clicks on the cell //event paramater
// // for loop?
// // function handleCellClick(clickedCellEvent) {   
// //     const clickedCell = clickedCellEvent.target;
// //     const clickedCellIndex = parseInt(
// //       clickedCell.getAttribute('data-cell-index')
// //     );

// //     if (board[clickedCellIndex] !== "" || !gameActive) {
// //         return;
// //     }

// //     handleCellPlayed(clickedCell, clickedCellIndex);
// //     handleResultValidation();
   
// // };
// function handleCellClick(event) {
//     const clickedCell = event.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    
//     if (board[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

    
//     handleCellPlayed(clickedCell, clickedCellIndex);

    
//     handleResultValidation();


//     currentPlayer = currentPlayer === "X" ? "O" : "X";
// }




// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     board[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
//     clickedCell.classList.add(`cell-${currentPlayer}`);
// }

// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i < winningCombos.length; i++) {
//       const winningCombo = winningCombos[i];
//       let a = board[winningCombo[0]];
//       let b = board[winningCombo[1]];
//       let c = board[winningCombo[2]];
//       if (a === '' || b === '' || c === '') {
//         continue;
//       }
//       if (a === b && b === c) {
//         roundWon = true;
//         break;
//       }
//     }
  
//     if (roundWon) {
//       statusDisplay.innerHTML = winningMessage();
//       gameActive = false;
//       return;
//     }
  
//     let roundDraw = !board.includes('');
//     if (roundDraw) {
//       statusDisplay.innerHTML = drawMessage();
//       gameActive = false;
//       return;
//     }
  
//     handlePlayerChange();
//   }
  
//   function handlePlayerChange() {
//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     statusDisplay.innerHTML = currentPlayerTurn();
//   };


// // function handleCellPlayed(clickedCell, clickedCellIndex) {
    
// //     board[clickedCellIndex] = currentPlayer;
// //     clickedCell.innerHTML = currentPlayer;
// // }
// // //winning combinations cells on table
// const winningCombos = [
//     [0, 1, 2], 
//     [3, 4, 5], 
//     [6, 7, 8], 
//     [0, 3, 6], 
//     [1, 4, 7], 
//     [2, 5, 8], 
//     [2, 4, 6], 
//     [0, 4, 8]
// ]
// // // [0, 1, 2] , [3, 4, 5], [ 6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
//  // if winningCombos === false return 'message'



// // if statement to change the HTML to swap the symbol from X to O (if, else)


// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     // statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.cell')
//                .forEach(cell => cell.innerHTML = "");
// } 


// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.restartButton').addEventListener('click', handleRestartGame);

const cells = document.querySelectorAll('.cell');

// Initialize variables
let currentPlayer = 'X';
let gameEnded = false;

// Add event listener to each cell

for (let i = 0; i < cells.length; i++) { //Run a for Loop 
    cells[i].addEventListener('click', () => { //Adding event listener to each individual cell. 
        if (!gameEnded && cells[i].textContent === '') { // If gameEnded === false, && the indivudal cell that we click text content is not occupied by anything
        cells[i].textContent = currentPlayer; // occupy with currentPlayer
        if (checkForWin()) { //calling below function, checking for winner
            alert(`${currentPlayer} won!`); // alerting that player has won
            gameEnded = true; // we are setting the gameEnded to true which doesn't allow any further boxes to be click 
        } else if (checkForDraw()) { //calling below function to check for draw
            alert('Draw!');
            gameEnded = true;
        } else {
            if (currentPlayer === "X") { //After click, checking to see if player1 is current player,
                currentPlayer = "O"; //if so, switch to player 2
              } else {
                currentPlayer = "X"; //opposite of above 
              }
        }
        }
    });
}


// Check if there is a win
function checkForWin() { 
    const winningCombos = [
      [0, 1, 2], //first row top
      [3, 4, 5], //second row
      [6, 7, 8], // 3rd row
      [0, 3, 6], //first column
      [1, 4, 7], //second column
      [2, 5, 8], //3rd column
      [0, 4, 8], //left start diagonal
      [2, 4, 6], //right start diagonal 
    ];

  return winningCombos.some(combo => {
    const [a, b, c] = combo; // Array destructuring, assigning values to a, b and c in relevance to the arrays nested in the WinningCombo Array
    return cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent; //checking to see if the first index position is not empty, and the other index positions are equal to the first in terms of text content.
  });
}

// Check if there is a draw
function checkForDraw() {
  return Array.from(cells).every(cell => cell.textContent !== '');
}
//creating a new array, and with the every, we're checking every index position with a loop, and then we're checking to see if the textContent is not empty for all of them, and a winning condition hasn't been met. 
