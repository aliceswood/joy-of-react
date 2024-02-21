import React, { useState } from "react";

function GuessInput() {

  function handleSubmit(event) {
      event.preventDefault();
      console.info({guess})
      setGuess('')
  }
	const [guess, setGuess] = useState("");
	return (
		<>
			<form className="guess-input-wrapper" 
        onSubmit={handleSubmit}>
				<label htmlFor="guess-input">
          Enter guess: 
        </label>
				<input 
          id="guess-input" 
          type="text"
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
