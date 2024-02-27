import React from "react";
import Banner from "../Banner/Banner";
import RestartButton from '../RestartButton/RestartButton'


function LostBanner({ answer, handleRestart }) {
	return (
		<Banner 
		status="sad banner"
		action={handleRestart}
		actionText="Restart Game"
		>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default LostBanner;
