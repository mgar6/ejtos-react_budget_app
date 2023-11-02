import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusSquare } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name)  => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusSquare size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></FaPlusSquare></td>
        <td><FaMinusSquare size='2.2em' color="blue" onClick={event=> decreaseAllocation(props.name)}></FaMinusSquare></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;

/*
Here, you are dispatching an action. Your action contains the type (so the reducer knows how to update the state) and the payload. In this case you are passing the ID of this expense (which you get from props when you rendered the ExpenseList).
*/
