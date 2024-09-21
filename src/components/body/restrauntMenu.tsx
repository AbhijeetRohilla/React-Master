
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useRestaraunt from '../utils/useRestaraunt';
import ItemList from './itemList';
import RestrauntCategory from './restrauntCategory';

function RestrauntMenu() {
  const [data,setData]=useState('');
  const [arr,setArr]=useState([]);
  const { restId }= useParams();
  const [cardData,setCardData]=useState([]);
  
  const resData=useRestaraunt(restId);
  useEffect(()=>{
    setArr(resData?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards)
    setData(resData?.data?.cards[2].card.card.info.name);
    const filteredData=resData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
      c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  setCardData(filteredData);
  },[resData,arr])

  
    
    // const {cuisines}= resData?.data?.cards[2].card.card.info

  return (
    <div className="text-center">
          <h2 className="font-bold m-2 p-2 bg-yellow-200 rounded-3xl">{data}</h2>
        {/* <ul> */}
          {/* {arr?.map((item:any)=>{
            return <li>
              {item?.card.card.itemCards?.[0].card.info.category}
            </li>
          })} */}

        {/* </ul> */}
        <ul>
{cardData?.length>1 &&
  cardData?.map((category,index)=>{
    return <RestrauntCategory category={category} index={index}/>
  })
}
</ul>
    </div>
  )
}

export default RestrauntMenu;

