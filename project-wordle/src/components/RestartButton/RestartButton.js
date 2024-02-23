import React from 'react';

function RestartButton() {

  function handleRestart() {
    location.reload()
  }

  return (
  <button onClick={handleRestart}>New Game</button>);
}

export default RestartButton;
