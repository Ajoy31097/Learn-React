import ExpenseItem from "./Components/Expenses/ExpenseItem";

function App() {

  const expenses = [
    { title: 'Food', amount: 50, location: 'Restaurant', date: new Date(2023, 2, 28) },
    { title: 'Petrol', amount: 100, location: 'Petrol Pump', date: new Date(2023, 4, 18) },
    { title: 'Movie', amount: 200, location: 'PVR', date: new Date(2023, 5, 21) },
  ];

  return (
    <div>
      <h1>Expense Items</h1>
      {expenses.map((expense, index) => (
        <ExpenseItem
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
