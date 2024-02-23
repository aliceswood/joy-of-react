import React from "react";
import Banner from "../Banner/Banner";
import RestartButton from '../RestartButton/RestartButton'


function LostBanner({ answer }) {
	return (
		<Banner status="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
			<RestartButton/>
		</Banner>
	);
}

export default LostBanner;
