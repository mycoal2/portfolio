import React, { useState } from 'react'
import "./Game.scss"
import Square from './Square'

const ChildBoard = (props) => {
   const [cell, setCell] = useState(Array(9).fill(null));

   const handleClick = (i, char) => () => {
      console.log("123")
      let dataCell = cell.slice();
      dataCell[i] = char;
      setCell(dataCell);
   }
   let char1 = "X";
   let char2 = "O";

  return (
    <>
      <Square value = {cell[0]} onClick={handleClick(0, char1)}/>
      <Square value = {cell[1]} onClick={handleClick(1, char2)}/>
      <Square value = {cell[2]} onClick={handleClick(2, "X")}/>
      <Square value = {cell[3]} onClick={handleClick(3, "X")}/>
      <Square value = {cell[4]} onClick={handleClick(4, "X")}/>
      <Square value = {cell[5]} onClick={handleClick(5, "X")}/>
      <Square value = {cell[6]} onClick={handleClick(6, "X")}/>
      <Square value = {cell[7]} onClick={handleClick(7, "X")}/>
      <Square value = {cell[8]} onClick={handleClick(8, "X")}/>
    </>
  )
}

export default ChildBoard