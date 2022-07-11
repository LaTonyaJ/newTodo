import React, { useState } from "react";

function Input({ add }) {
  const [inputText, setInputText] = useState("");

  function handleClick() {
    add((data) => [...data, inputText]);
    setInputText("");
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="form">
      <input
        type="text"
        name="item"
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
