import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState("in progress");

	console.log("answer:", answer);

	function handleRestart() {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setGuesses([]);
		setGameStatus("in progress");
	}

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);

		if (tentativeGuess === answer) {
			setGameStatus("win");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

	return (
		<>
			<GuessResults validatedGuesses={validatedGuesses} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
			<Keyboard validatedGuesses={validatedGuesses} />
			{gameStatus === "win" && (
				<WinBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />
			)}
			{gameStatus === "lost" && <LostBanner answer={answer} handleRestart={handleRestart} />}
		</>
	);
}

export default Game;
