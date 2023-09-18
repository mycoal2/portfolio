import React from 'react';
import ChildBoard from "./ChildBoard";
import "./Game.scss"

const ParentBoard = (props) => {
   const id = props.id;
   var boardYes = false;
   if(props.boardInfo.currentBoard === props.id || (props.boardInfo.currentBoard === null && props.boardInfo.freeBoard[id] === null)) {
      boardYes = true;
   }
   return (
      <>
         <div className={`bg-third parentCell ${boardYes ? 'currentBoard' : 'border-black'}`}>
            <ChildBoard playerTurn={props.playerTurn} changePlayer={props.changePlayer} boardInfo={props.boardInfo} id={id}></ChildBoard>
            {/* <button className="text-white border" onClick={()=>{console.log(props.boardInfo.currentBoard)}} >100</button>
            <button className="text-white border" onClick={()=>{props.boardInfo.changeBoard(5)}} >123</button>
            <button className="text-white border" onClick={()=>{console.log(id)}} >53</button> */}
         </div>
      </>
  )
}

export default ParentBoard