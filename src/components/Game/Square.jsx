import React from 'react'

const Square = (props) => {
   
  return (
    <>
      <button className="childCell" onClick={props.onClick}> {props.value} </button>
    </>
  )
}

export default Square