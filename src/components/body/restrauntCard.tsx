import React from 'react';
import { IMG_URL } from '../utils/common';
 const RestCard=({resData})=>{
    const cuisine=resData?.info.cuisines.join(', ')
    
    

    return(
        
        <div className="flex">
        <div className='flex-wrap w-48 m-4 p-4 bg-yellow-100 h-4/5 rounded-lg hover:bg-yellow-200 sm:bg-blue-200 hover:bg-blue-300'>
        
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