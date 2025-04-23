import React, { useState } from "react";

import GuessForm from "../GuessForm";
import GuessBoard from "../GuessBoard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "new-component/src/utils";
import { WORDS } from "../../data";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [answer, _] = useState(() => sample(WORDS));

  console.info(answer);

  const [isWin, setIsWin] = useState();

  function submitHandler(guess) {
    if (guesses.includes(guess)) {
      window.alert("That guess has already been made");
      return;
    }

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setIsWin(true);
    } else if (NUM_OF_GUESSES_ALLOWED === nextGuesses.length) {
      setIsWin(false);
    }
  }

  return (
    <>
      <GuessBoard guesses={guesses} answer={answer} />

      <GuessForm onSubmit={submitHandler} />
      {isWin && <WonBanner attempt={guesses.length} />}
      {isWin === false && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
