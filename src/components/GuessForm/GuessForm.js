import React, { useState } from "react";

function GuessForm({ onSubmit }) {
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(input);
        setInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="^[A-Za-z]{5}$"
        required={true}
        title="Input has to be exactly 5 characters"
        value={input}
        id="guess-input"
        onChange={(e) => {
          setInput(e.target.value.toUpperCase());
        }}
        type="text"
      />
    </form>
  );
}

export default GuessForm;
