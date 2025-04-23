import React from "react";
import Banner from "../Banner";

function WonBanner({ attempt }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{attempt} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
