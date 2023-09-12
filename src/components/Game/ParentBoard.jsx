import React from 'react';
import ChildBoard from "./ChildBoard";
import "./Game.scss"

const ParentBoard = (props) => {
   let playerTurn = props.playerTurn;
  return (
    <>
      <cell className="parentCell">
         <ChildBoard ></ChildBoard>
      </cell>
    </>
  )
}

export default ParentBoard