import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value < 20000)
        {
            const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
            }, 0);
            if (event.target.value < totalExpenses)
                alert("The budget cannot be lower than the expenses")
            else
                setNewBudget(event.target.value);}
        else
            alert("Budget cannot exceed £20,000")
        }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {Location}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;

/*
La línea 12 se cambió de <span>Budget: £{budget}</span>

We are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget. We are also defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.
We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange when the user changes the value of the input field.
Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
*/
