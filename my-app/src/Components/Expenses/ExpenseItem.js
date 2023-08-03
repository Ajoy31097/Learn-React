import React, {useState} from "react";

import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card.js"

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

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

    return <Card><div className="expense-item-date">
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={amount} location={props.location} title={title} />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        <button onClick={hundredHandler}>$100</button>
    </div></Card>
}
export default ExpenseItem;