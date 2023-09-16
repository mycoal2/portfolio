import React, { useEffect, useState } from 'react'
import "./Game.scss"
import Square from './Square'

const ChildBoard = (props) => {
   const [cell, setCell] = useState(Array(9).fill(null));
   const [cellWin, setCellWin] = useState(false);
   const [player1Color, setPlayer1Color] = useState(false);
   const [boardPlayable, setBoardPlayable] = useState(false);
   const id = props.id;
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
   useEffect(() => {
      if(props.boardInfo.currentBoard === null || props.boardInfo.currentBoard === id) {
         setBoardPlayable(true);
         return;
      } 
      setBoardPlayable(false);
      
   }, [props.boardInfo.currentBoard, id]);
   

   const handleClick = (i, char) => () => {
      let dataCell = cell.slice();
      dataCell[i] = char;
      setCell(dataCell);
      if(checkWin(i, dataCell) !== 5) {
         props.boardInfo.changeBoard(i);
      }
      props.changePlayer();
   }

   const checkWin = (i, dataCell) => {
      const linesWin = lines.filter(subarray => subarray.includes(i));
      for(let index = 0; index < linesWin.length; index++) {
         if(dataCell[linesWin[index][0]] === dataCell[linesWin[index][1]] && dataCell[linesWin[index][0]] === dataCell[linesWin[index][2]]) {
            console.log("woner")
            setCellWin(true);
            let tempFreeBoard = props.boardInfo.freeBoard.slice();
            if(props.playerTurn === props.boardInfo.player1) {
               setPlayer1Color(true);
               tempFreeBoard[id] = "Player1";
            } else {
               tempFreeBoard[id] = "Player2";
            }
            props.boardInfo.setFreeBoard(tempFreeBoard);
            props.boardInfo.changeBoard(i, tempFreeBoard);
            checkFinalWin(tempFreeBoard);
            return 5;
         }
      }
      if(!dataCell.some((element) => element === null)) {
         let tempFreeBoard = props.boardInfo.freeBoard.slice();
         tempFreeBoard[i] = "Draw";
         props.boardInfo.setFreeBoard(tempFreeBoard);
      }
   }
   const checkFinalWin = (board) => {
      const linesWin = lines.filter(subarray => subarray.includes(id));
      for(let index = 0; index < linesWin.length; index++) {
         if(board[linesWin[index][0]] === board[linesWin[index][1]] && board[linesWin[index][0]] === board[linesWin[index][2]]) {
            console.log("GAME END GG")
            if(props.playerTurn === props.boardInfo.player1) {
               console.log("P1 won");
               props.boardInfo.setGameState("Player 1 HAS WON")
            } else {
               console.log("P2 won");
               props.boardInfo.setGameState("Player 2 HAS WON")
            }

            return;
         }
      }
      if(!board.some((element) => element === null)) {
         props.boardInfo.setGameState("GAME DRAW");
      }
   }

  return (  
    <div className={`mediumCell ${cellWin ? (player1Color ? 'player1Border' : 'player2Border') : ''} ${boardPlayable ? '' : 'pointer-events-none'}`}>
      <Square value={cell[0]} onClick={handleClick(0, props.playerTurn)} won={cellWin}/>
      <Square value={cell[1]} onClick={handleClick(1, props.playerTurn)} won={cellWin}/>
      <Square value={cell[2]} onClick={handleClick(2, props.playerTurn)} won={cellWin}/>
      <Square value={cell[3]} onClick={handleClick(3, props.playerTurn)} won={cellWin}/>
      <Square value={cell[4]} onClick={handleClick(4, props.playerTurn)} won={cellWin}/>
      <Square value={cell[5]} onClick={handleClick(5, props.playerTurn)} won={cellWin}/>
      <Square value={cell[6]} onClick={handleClick(6, props.playerTurn)} won={cellWin}/>
      <Square value={cell[7]} onClick={handleClick(7, props.playerTurn)} won={cellWin}/>
      <Square value={cell[8]} onClick={handleClick(8, props.playerTurn)} won={cellWin}/>
    </div>
  )
}

export default ChildBoard