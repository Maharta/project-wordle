import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessBoard({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((val) => {
        let guess = "";
        if (guesses.length > val) {
          guess = guesses[val];
        }
        const letterStatus = checkGuess(guess, answer);
        return <GuessRow letterStatus={letterStatus} key={val} />;
      })}
    </div>
  );
}

function GuessRow({ letterStatus }) {
  return (
    <p className="guess">
      {range(5).map((val) =>
        !letterStatus ? (
          <span key={val} className="cell"></span>
        ) : (
          <span key={val} className={`cell ${letterStatus[val].status}`}>
            {letterStatus[val].letter}
          </span>
        )
      )}
    </p>
  );
}

export default GuessBoard;
