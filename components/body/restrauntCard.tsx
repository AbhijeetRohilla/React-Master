import React from 'react';
import './restrauntCard.css';

const RestCard=()=>{
    return(
        <div className='restraunt-card-container'>
            <input type='search' placeholder='search'></input>
            <div className='rest-card'>Apni Rasoi</div>
        </div>
    )
}
export default RestCard;