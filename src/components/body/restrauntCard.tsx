import React from 'react';
import './restrauntCard.css';
import { IMG_URL } from '../utils/common';
 const RestCard=({resData})=>{
    console.log(resData)
    const cuisine=resData?.info.cuisines.join(', ')
    
    

    return(
        
        <div className="parent-card">
        <div className='restraunt-card-container'>
        
            <img src={IMG_URL+(resData?.info?.cloudinaryImageId)}></img>
            <h4>{resData?.info?.name}</h4>
            <h4>{cuisine}</h4>
            <h4>{resData?.info?.avgRatingString} star</h4>
            <h4>{resData?.info?.sla?.slaString} min away</h4>
            <div className='rest-card'></div>
        </div> 

        </div>
    )
}
export default RestCard;