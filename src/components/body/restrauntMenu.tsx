
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { RESTRAUNT_API } from '../utils/common';

function RestrauntMenu() {
  const [resData,setResData]=useState({});
  const [data,setData]=useState('');
  const [arr,setArr]=useState([]);
  const { restId }= useParams()
  console.log(useParams(),"Abhi")
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
    const data= await fetch(RESTRAUNT_API+restId);
    const json= await (data.json());
    setResData(json);
   
  }
  useEffect(()=>{
    setArr(resData?.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards)
    setData(resData?.data?.cards[2].card.card.info.name);
  },[resData,arr])

  
    
    // const {cuisines}= resData?.data?.cards[2].card.card.info

  return (
    <div>
        <div>{data}
        <ul>
          {arr?.map((item:any)=>{
            return <li>
              {item?.card.card.itemCards?.[0].card.info.category}
            </li>
          })}
        </ul>
        </div>

    </div>
  )
}

export default RestrauntMenu;

