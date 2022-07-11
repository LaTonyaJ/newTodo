import React from "react";
import Item from "./Item";

function Todo({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item text={item} />
      ))}
    </ul>
  );
}

export default Todo;
