import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import { useExpense } from "./context/Expenses";

function App() {
  const { buget, totalSpent } = useExpense();
  return (
    <div className="App">
      <h1>Budget Planner</h1>
      <div className="upper">
        <span className="us">
          Budget : <h3>2000</h3>
        </span>
        <span className="us">
          Remaining Amount : <h3>{buget}</h3>
        </span>
        <span className="us">
          Spent So far : <h3>{totalSpent}</h3>
        </span>
      </div>

      <ExpenseList></ExpenseList>
      <Form></Form>
    </div>
  );
}

export default App;
