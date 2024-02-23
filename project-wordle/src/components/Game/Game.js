import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState("in progress");

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess === answer) {
			setGameStatus("win");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
			{gameStatus === "win" && (
				<WinBanner numOfGuesses={guesses.length} />
			)}
			{gameStatus === "lost" && (
				<LostBanner answer={answer} />
			)}
		</>
	);
}

export default Game;
