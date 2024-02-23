import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton'

function WinBanner({numOfGuesses}) {
  return (
    <Banner status="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
      <RestartButton/>
    </Banner>
  );
}

export default WinBanner;
