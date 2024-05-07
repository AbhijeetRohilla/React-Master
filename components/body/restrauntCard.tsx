import React from 'react';
import './restrauntCard.css';

const RestCard=({dish,str,dist,res})=>{
    return(
        <div className="parent-card">
            <input type='search' placeholder='search'></input>
        <div className='restraunt-card-container'>
        
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/1/ac98607d-c059-4c7d-9b85-471ee8bd15d4_658c42d9-04e3-4371-89e3-39f2b4de45c3.jpg"></img>
            <h4>{dish}</h4>
            <h4>{str} star</h4>
            <h4>{dist} min away</h4>
            <div className='rest-card'>{res}</div>
        </div>
        </div>
    )
}
export default RestCard;