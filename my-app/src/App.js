import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import ExpenseForm from "./Components/Expenses/ExpenseForm";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter";
import ExpensesChart from "./Components/Expenses/ExpensesChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2020"); // Initialize with a default year

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filter the expenses based on the selected year
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <h1>Expense Items</h1>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpensesFilter
  selected={filteredYear}
  onChangeFilter={filterChangeHandler}
/>
<ExpensesChart expenses={filteredExpenses} />
{filteredExpenses.length === 0 ? (
  <p>No Expenses Found</p>
) : (
  <>
    {filteredExpenses.length === 1 ? (
      <p>Only a single Expense here. Please add more...</p>
    ) : null}
    {filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
      />
    ))}
  </>
)}

    </div>
  ); 
          } 

export default App;
