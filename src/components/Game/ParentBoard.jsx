import React from 'react';
import ChildBoard from "./ChildBoard";
import "./Game.scss"

const ParentBoard = (props) => {
  return (
    <>
      <cell className="bg-third parentCell">
         <ChildBoard playerTurn={props.playerTurn} changePlayer={props.changePlayer}></ChildBoard>
      </cell>
    </>
  )
}

export default ParentBoard