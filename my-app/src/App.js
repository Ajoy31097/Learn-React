// import logo from './logo.svg';
// import './App.css';

import Styles from "./Components/ExpenseItem.css";

import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const expense = [
    { title: 'Food', amount: 50, location: 'Restaurant', date: new Date(2023, 2, 28) },
    { title: 'Petrol', amount: 100, location: 'Petrol Pump', date: new Date(2023, 4, 18) },
    { title: 'Movie', amount: 200, location: 'PVR', date: new Date(2023, 5, 21) },
  ];

  return (
    <div>
      <h1>Expense Items</h1>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} location={expense[0].location} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} location={expense[1].location} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} location={expense[2].location} date={expense[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
