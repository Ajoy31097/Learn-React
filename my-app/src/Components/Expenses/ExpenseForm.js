import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [UserInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        enteredLocation: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...UserInput, enteredTitle: event.target.value }
        });
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...UserInput, enteredAmount: event.target.value }
        });
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...UserInput, enteredDate: event.target.value }
        });
    }
    const locationChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...UserInput, enteredLocation: event.target.value }
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: UserInput.enteredTitle,
            amount: UserInput.enteredAmount,
            date: new Date(UserInput.enteredDate),
            location: UserInput.enteredLocation
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
            enteredLocation: ''
        });
    };

    return <div className='new-expense'>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={UserInput.enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={UserInput.enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2023-12-31" value={UserInput.enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Location</label>
                    <input type='text' value={UserInput.enteredLocation} onChange={locationChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;