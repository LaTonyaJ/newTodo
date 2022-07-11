import React, { useState } from "react";

function Item({ text }) {
  const [checked, setChecked] = useState(false);

  function handleClick(evt) {
    console.log(evt.target);
    setChecked(!checked);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: checked ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

export default Item;
