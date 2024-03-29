import React, { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);

function ExpenseProvider({ children }) {
  const [buget, setBudget] = useState(2000);
  const [expense, setExpense] = useState([]);

  let totalSpent = expense.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.amount;
  }, 0);

  let remaining = buget - totalSpent;

  const addExpense = (name, amount) => {
    if (!name || !amount) {
      alert("Please provide a name and an amount");
      return;
    } else if (amount > buget) {
      alert(`You can only spend up to $${buget}. Please enter a lower amount.`);
      return;
    } else {
      setExpense([...expense, { name: name, amount: parseFloat(amount) }]);
      setBudget(buget - amount);
    }
  };

  const removeExpense = (id) => {
    setExpense(expense.filter((el, index) => index !== id));
    setBudget(buget + expense[id].amount);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expense,
        addExpense,
        removeExpense,
        buget,
        setBudget,
        remaining,
        totalSpent,
      }}
    >
      {" "}
      {children}{" "}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
