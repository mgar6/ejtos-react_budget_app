import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

    return (
        <div className='alert alert-secondary'> Currency {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Europe</option>
        <option value="₹">₹ Rupee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;
/*
In Location.js, you are importing AppContext and adding changeLication class to change the location along with its currencies. When you change the Location, currencies will be updated at all the required places.
*/