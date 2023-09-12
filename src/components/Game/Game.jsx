import React, { useState } from 'react'
import ParentBoard from "./ParentBoard";

import "./Game.scss"

const Game = () => {

   const player1 = "M";
   const player2 = "E";

   const [playerTurn, setPlayerTurn] = useState(player1);
   const [freeBoard, setFreeBoard] = useState(Array(9).fill(true));
   const [currentBoard, setCurrentBoard] = useState(null);

   const changePlayerTurn = () => {
      if(playerTurn === player1) {
         setPlayerTurn(player2);
      } else {
         setPlayerTurn(player1);
      }
   }
   const changeBoard = (i) => () => {
      if(freeBoard[i]) {
         setCurrentBoard(i);
      } else {
         setCurrentBoard(null);
      }
   }
   // function checkWin() {

   // };
   return (
      <section className="bg-secondery py-20">
         <div className="game-title">GIGA TIC TAC TOE</div>
         <div className="turn-title">
            <div className="px-5 overflow-hidden">{playerTurn}</div> 
            <div className="overflow-hidden">TURN</div>
         </div>
         <div className="board">
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} currentBoard={currentBoard} freeBoard={freeBoard} changeBoard={changeBoard} setFreeBoard={setFreeBoard}/>
         </div>
      </section>
   )
}

export default Game