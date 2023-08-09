import React, {useState} from "react";

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const[filteredYear, setFilteredYear] = useState('2020');

    const clickHandler = () => {
        setTitle("Updated!")
    }

    const deleteHandler = () => {
        const expenseItem = document.querySelector(".expense-item-date");
        expenseItem.remove();
    }

    const hundredHandler = () => {
        setAmount("$100")
    }
        

        const filterChangeHandler = selectedyear => {
            setFilteredYear(selectedyear);
        };

    return <div> <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <Card><div className="expense-item-date">
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={amount} location={props.location} title={title} />
        <button onClick={clickHandler} className="expense-item__price">Change Title</button>
        <button onClick={deleteHandler} className="expense-item__price">Delete Expense</button>
        <button onClick={hundredHandler} className="expense-item__price">$100</button>
    </div></Card></div>
}
export default ExpenseItem;