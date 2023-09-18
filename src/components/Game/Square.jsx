import React, { useEffect, useState } from 'react'

const Square = (props) => {
  const [player1Color, setPlayer1Color] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  useEffect(() => {
    if(props.value === "O") {
      setPlayer1Color(true);
    }  else {
      setPlayer1Color(false);
    }
  }, [props.value]);
  useEffect(() => {
    if(props.won) {
      setIsButtonClicked(true);
    }  
  }, [props.won]);

  const handleClick = () => {
    props.onClick();
    setIsButtonClicked(true);
  };

  return (
    <>
      <button className={`bg-fourth childCell ${player1Color ? 'player1Color' : 'player2Color'}`} disabled={isButtonClicked} onClick={handleClick}> {props.value} </button>
    </>
  )
}

export default Square