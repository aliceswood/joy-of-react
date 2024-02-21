import React from "react";

function GuessResults({ guesses }) {
	return (
		<div className="guess-results">
			{guesses.map(({ id, tentativeGuess }) => (
				<p key={id} className="guess">
					{tentativeGuess}
				</p>
			))}
		</div>
	);
}

export default GuessResults;
