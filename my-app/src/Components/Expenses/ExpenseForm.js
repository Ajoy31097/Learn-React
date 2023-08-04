import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setenteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    }
    const [enteredAmount, setenteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    }
    const [enteredDate, setenteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }
    const [enteredLocation, setenteredLocation] = useState('');
    const locationChangeHandler = (event) => {
        setenteredLocation(event.target.value);
    }
    return <div className='new-expense'>
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__control' onChange={locationChangeHandler}>
            <label>Location</label>
            <input type='text'></input>
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        </div>
    </form>
    </div> 
}

export default ExpenseForm;