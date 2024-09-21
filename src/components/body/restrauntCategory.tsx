import React, {useState} from 'react';
import ItemList from "./itemList";

const RestrauntCategory=({category, index})=>{
    const [showCategory,setShowCategory]=useState(false);
    const handleClick=()=>{
        setShowCategory(!showCategory)
        setShowIndex(!showCategory)
      }
      const [showIndex,setShowIndex]=useState(false);
    return(
        <>
        <div  className="mt-4 p-4 bg-gray-100 shadow-lg justify-between w-6/12 mx-auto" >
   
   <li onClick={handleClick} key = {category?.card?.card?.id} className="mx-auto w-6/12 mt-4 p-4 justify-between flex font-semibold">
         {category?.card?.card?.title } ({(category?.card?.card?.itemCards?.length)})  <strong className=""> V </strong>
       </li>
       { showCategory && 
       <ItemList key ={category?.card?.card?.id} category={category?.card?.card} />
       }
   </div>
        </>
    )
}

export default RestrauntCategory;