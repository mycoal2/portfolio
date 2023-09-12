import React from 'react'
import ParentBoard from "./ParentBoard";

import "./Game.scss"




const Game = () => {
   const player1 = "X";
   const player2 = "O";

   function checkWin() {

   };
   return (
      <section className="board py-20">
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
         <ParentBoard/>
      </section>
   )
}

export default Game