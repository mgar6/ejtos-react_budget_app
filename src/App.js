import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Location';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                                <Currency />
                            </div>
                        }        

                        {
                            /* Add Remaining component here*/
                             //Remaining component
                                <div className='col-sm'>
                                    <Remaining />
                                </div>
                        }        

                        {
                            /* Add ExpenseTotal component here */
                            //ExpenseTotal component
                                <div className='col-sm'>
                                    <ExpenseTotal />
                                </div>
                        }
                    </div>        
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row '>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <AllocationForm/>
                    </div>
                </div>   
            </div>
        </AppProvider>
    );
};
export default App;
/*
Here, you are importing different components,adding a bootstrap container that helps you center your App on the page
*/