

function ExpenseItem(props) {
    return <div className="expense-item-date">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item_location"><h2>{props.location}</h2></div>
            <div className="expense-item__price">Rs {props.amount}</div>
        </div>
    </div>
}
export default ExpenseItem;