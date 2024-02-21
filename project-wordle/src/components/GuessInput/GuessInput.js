import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
      event.preventDefault();
      console.info({guess})
      setGuess('')
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
          id="guess-input" 
          type="text"
          value={guess} 
          onChange={event => {
            setGuess((event.target.value).toUpperCase())
          }}
          pattern="[a-zA-Z]{5}"
          title="Must be a 5 letter word"
          />
			</form>
		</>
	);
}

export default GuessInput;
