import React, { useEffect, useState } from 'react'
import "./Game.scss"
import Square from './Square'

const ChildBoard = (props) => {
   const [cell, setCell] = useState(Array(9).fill(null));
   const [cellWin, setCellWin] = useState(false);
   const [player1Color, setPlayer1Color] = useState(false);
   const [boardPlayable, setBoardPlayable] = useState(false);
   const id = props.id;
   useEffect(() => {
      console.log("check if playable");
      console.log(props.boardInfo.currentBoard);
      if(props.boardInfo.currentBoard == null || props.boardInfo.currentBoard == id) {
         setBoardPlayable(true);
         console.log("board is playable" + id);
         return;
      } 
      setBoardPlayable(false);
      
   }, [props.boardInfo.currentBoard, id]);
   

   const handleClick = (i, char) => () => {
      let dataCell = cell.slice();
      dataCell[i] = char;
      setCell(dataCell);
      checkWin(i, dataCell);
      props.boardInfo.changeBoard(i);
      // console.log(props.boardInfo.currentBoard);
      // console.log(props.boardInfo.freeBoard);
      props.changePlayer();
   }

   const checkWin = (i, dataCell) => {
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
      const linesWin = lines.filter(subarray => subarray.includes(i));
      for(let index = 0; index < linesWin.length; index++) {
         if(dataCell[linesWin[index][0]] === dataCell[linesWin[index][1]] && dataCell[linesWin[index][0]] === dataCell[linesWin[index][2]]) {
            console.log("woner")
            if(props.playerTurn === "M") {
               setPlayer1Color(true);
            }
            setCellWin(true);
            let tempFreeBoard = props.boardInfo.freeBoard.slice();
            tempFreeBoard[id] = false;
            props.boardInfo.setFreeBoard(tempFreeBoard);
            return;
         }
      }
      if(!dataCell.some((element) => element === null)) {
         let tempFreeBoard = props.boardInfo.freeBoard.slice();
         tempFreeBoard[i] = false;
         props.boardInfo.setFreeBoard(tempFreeBoard);
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