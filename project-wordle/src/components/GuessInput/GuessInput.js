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
          />
			</form>
		</>
	);
}

export default GuessInput;
