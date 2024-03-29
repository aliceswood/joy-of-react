import React, { useState } from "react";

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
      event.preventDefault();
      handleSubmitGuess(tentativeGuess);

      setTentativeGuess('')
  }
	return (
		<>
			<form className="guess-input-wrapper" 
        onSubmit={handleSubmit}>
				<label htmlFor="guess-input">
          Enter guess: 
        </label>
				<input 
          required
          disabled={gameStatus !== 'in progress'}
          id="guess-input" 
          type="text"
          value={tentativeGuess} 
          onChange={event => {
            setTentativeGuess((event.target.value).toUpperCase())
          }}
          pattern="[a-zA-Z]{5}"
          title="Must be a 5 letter word"
          />
			</form>
		</>
	);
}

export default GuessInput;
