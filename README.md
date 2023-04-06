# Coming soon

- current struggles 

adding functionality to my restart button

- winning combinations 

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