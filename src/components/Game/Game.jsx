import React, { useState } from 'react'
import ParentBoard from "./ParentBoard";

import "./Game.scss"

const Game = () => {

   const player1 = "M";
   const player2 = "E";

   const [playerTurn, setPlayerTurn] = useState(player1);
   const [freeBoard, setFreeBoard] = useState(Array(9).fill(null));
   const [currentBoard, setCurrentBoard] = useState(null);
   const [gameState, setGameState] = useState("Not finished");
   

   const changePlayerTurn = () => {
      if(playerTurn === player1) {
         setPlayerTurn(player2);
      } else {
         setPlayerTurn(player1);
      }
   }
   const changeBoard = (i, newBoard) => {
      console.log(freeBoard);
      console.log(newBoard);
      if(newBoard === undefined) {
         if(freeBoard[i] === null) {
            setCurrentBoard(i);
         } else {
            setCurrentBoard(null);
         } 
      } else {
         if(newBoard[i] === null) {
            setCurrentBoard(i);
         } else {
            setCurrentBoard(null);
         } 
      }
   }
   const boardInfo = {
      player1,
      player2,
      currentBoard,
      changeBoard,
      freeBoard,
      setFreeBoard,
      setGameState,
   }
   
   
   return (
      <section className="bg-secondery py-20">
         <div className="game-title">GIGA TIC TAC TOE</div>
         <div className="turn-title">
            <div className="px-5 overflow-hidden">{playerTurn}</div> 
            <div className="overflow-hidden">TURN</div>
         </div>
         <div className="turn-title">
            {currentBoard === null ? 
               <div className="px-10 overflow-hidden">Play any Board </div> :
               <div className="px-5 overflow-hidden">Board {currentBoard + 1} </div> 

            }
         </div>
         
         <div className={`board ${gameState === "Not finished" ? '' : 'pointer-events-none'}`}>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={0}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={1}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={2}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={3}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={4}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={5}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={6}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={7}/>
            <ParentBoard playerTurn={playerTurn} changePlayer={changePlayerTurn} boardInfo={boardInfo} id={8}/>
         </div>
      </section>
   )
}

export default Game