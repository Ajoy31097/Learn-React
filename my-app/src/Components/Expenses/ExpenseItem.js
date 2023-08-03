import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card.js"

function ExpenseItem(props) {

    const clickHandler = () => {
        alert("clicked!");
    }

    const deleteHandler = () => {
        const expenseItem = document.querySelector(".expense-item-date");
        expenseItem.remove();
    }

    return <Card><div className="expense-item-date">
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
    </div></Card>
}
export default ExpenseItem;