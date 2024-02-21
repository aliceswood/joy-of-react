import React, { useState } from "react";

function GuessInput() {
	const [guess, setGuess] = useState("");
	return (
		<>
			<form onSubmit={(event) => {
        event.preventDefault();
        console.info({guess})
        setGuess('')
      }}>
				<label htmlFor="guess-field">
          Enter guess: 
        </label>
				<input 
          id="guess-field" 
          value={guess} 
          onChange={event => {
            setGuess((event.target.value).toUpperCase())
          }}
          pattern="[A-Z]{5}"
          title="Must be a 5 letter word"
          />
			</form>
		</>
	);
}

export default GuessInput;
