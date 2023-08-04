import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const changeHandler = (event) => {
        console.log(event.target.value);
    }
    return <div className='new-expense'>
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
            <label>Title</label>
            <input type='text' onChange={changeHandler}></input>
            </div>
            <div className='new-expense__controls'>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={changeHandler}></input>
            </div>
            <div className='new-expense__controls'>
            <label>Date</label>
            <input type='date' min="2022-01-01" max="2023-12-31" onChange={changeHandler}></input>
            </div>
            <div className='new-expense__controls' onChange={changeHandler}>
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