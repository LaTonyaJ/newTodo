import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState("");

  function handleClick() {
    setItems((data) => [...data, formData]);
    setFormData("");
  }

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="item"
          value={formData}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map((i) => (
            <li key={i.indexOf()}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
