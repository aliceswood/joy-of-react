import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton'

function WinBanner({numOfGuesses, handleRestart}) {
  return (
    <Banner 
    status="happy banner"
    action={handleRestart}
    actionText="Restart Game">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
