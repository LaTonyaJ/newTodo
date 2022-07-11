import React, { useState } from "react";
import Todos from "./TodoItems";
import Input from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input add={setItems} />
      <div>
        <Todos items={items} />
      </div>
    </div>
  );
}

export default App;
