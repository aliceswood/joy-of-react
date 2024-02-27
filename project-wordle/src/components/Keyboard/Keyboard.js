import React from "react";
const keyboardRows = [
	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
	["a", "s", "d", "f", "g", "h", "j", "k", "l"],
	["z", "x", "c", "v", "b", "n", "m"],
];

function getStatusByLetter(validatedGuesses) {
	const statusObject = {};

	const allLetters = validatedGuesses.flat();

	allLetters.forEach(({ letter, status }) => {
		const currentStatus = statusObject[letter];

		if (currentStatus === undefined) {
			statusObject[letter] = status;
			return;
		}

		const STATUS_IMPORTANCE = {
			correct: 1,
			misplaced: 2,
			incorrect: 3,
		};

		const currentStatusRank = STATUS_IMPORTANCE[currentStatus];
		const newStatusRank = STATUS_IMPORTANCE[status];

		if (newStatusRank < currentStatusRank) {
			statusObject[letter] = status;
		}
	});
	return statusObject;
}

function Keyboard({ validatedGuesses }) {
	const statusByLetter = getStatusByLetter(validatedGuesses);
  

	return (
		<div className="keyboard">
			{keyboardRows.map((row, index) => (
				<div className="keyboard-row" key={index}>
					{row.map((letter) => (
						<div
							key={letter}
							className={`letter ${statusByLetter[letter] || ''}`}
						>
							{letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
