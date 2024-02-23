import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState('in progress')

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess]
		setGuesses(nextGuesses);

		if (tentativeGuess === answer) {
			setGameStatus('won')
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost')
		}
	}

	return (
		<>
		{gameStatus}
			<GuessResults guesses={guesses} answer={answer}/>
			<GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
		</>
	);
}

export default Game;
