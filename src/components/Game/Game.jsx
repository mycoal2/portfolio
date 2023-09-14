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
   const changeBoard = (i) => {
      console.log("changed board to " + i)
      if(freeBoard[i]) {
         setCurrentBoard(i);
      } else {
         setCurrentBoard(null);
      }
   }
   const boardInfo = {
      currentBoard,
      changeBoard,
      freeBoard,
      setFreeBoard,
   }
   
   return (
      <section className="bg-secondery py-20">
         <div className="game-title">GIGA TIC TAC TOE</div>
         <div className="turn-title">
            <div className="px-5 overflow-hidden">{playerTurn}</div> 
            <div className="overflow-hidden">TURN</div>
         </div>
         <div className="board">
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="0"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="1"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="2"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="3"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="4"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="5"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="6"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="7"/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id="8"/>
         </div>
      </section>
   )
}

export default Game