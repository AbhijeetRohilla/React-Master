import React from 'react';
import './restrauntCard.css';
const RestCard=({resData})=>{
    console.log(resData)
    const cuisine=resData?.info.cuisines.join(', ')
    const imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    

    return(
        
        <div className="parent-card">
        <div className='restraunt-card-container'>
        
            <img src={imgUrl+(resData?.info?.cloudinaryImageId)}></img>
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