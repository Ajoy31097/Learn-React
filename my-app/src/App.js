import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import ExpenseForm from "./Components/Expenses/ExpenseForm";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter";

function App() {
  const [expenses, setExpenses] = useState([]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <h1>Expense Items</h1>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
