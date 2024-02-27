import React from "react";
const keyboardRows = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"],
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
  console.log(statusByLetter)

	return (
		<div className="keyboard">
			{keyboardRows.map((row, index) => (
				<div className="keyboard-row" key={index}>
					{row.map((letter) => (
						<div
							key={letter}
							className={`letter ${statusByLetter[letter] || ''}`}
						>
              {console.log(letter)}
							{letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
