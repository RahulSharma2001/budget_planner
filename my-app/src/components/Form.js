import React, { useState } from "react";
import { useExpense } from "../context/Expenses";

function Form() {
  const { addExpense } = useExpense();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    addExpense(name, price);
    setName("");
    setPrice(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Item"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter Amount"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
