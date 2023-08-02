function ExpenseDetails(props) {
    const title = props.title;
    const amount = props.amount;
    const location = props.location;

    return (
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item_location"><h2>{props.location}</h2></div>
            <div className="expense-item__price">Rs {props.amount}</div>
        </div>
    )
}

export default ExpenseDetails;