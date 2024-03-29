import React from "react";
import { useExpense } from "../context/Expenses";

function ExpenseList() {
  const { expense, removeExpense } = useExpense();

  return (
    <ul className="expense-list">
      {expense.length === 0 ? (
        <p>Empty List</p>
      ) : (
        expense.map((item, index) => {
          return (
            <li key={index} className="expense-item">
              <span>{item.name}</span>
              <span>${item.amount}</span>
              <button onClick={() => removeExpense(index)}>Remove</button>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default ExpenseList;
