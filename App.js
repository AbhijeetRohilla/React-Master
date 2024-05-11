import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/components/header/header';
import RestCard from './src/components/body/restrauntCard';
import './app.css'
import data from './src/components/utils/output.json'
import { useState,useEffect } from 'react';
import { REAL_FOOD_API } from './src/components/utils/common';
import Spinner from 'react-spinner-material';
import RestShimmer from './src/components/body/restrauntShimmer';


const App=()=>{
    const [resData, setResData]=useState([]);

useEffect(()=>{
fetchData();
},[])

    const fetchData= async ()=>{
        const apiData= await fetch(REAL_FOOD_API);
        const dataJson= await apiData.json();
        const pureData= dataJson?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants;
        setResData(pureData);

    }
    


    const handleSort=()=>{
       const filteredData= resData.filter((res)=>res?.info?.avgRating>4);
       setResData(filteredData)

    }
    
    return(
        
    <>
    <Header/>
    {resData.length<1
       ? 
       <RestShimmer/>
        :
        <>
    <div className='sort-by-button'>
        <button onClick={handleSort}>Sort By</button>
    </div>
    <div className='restCard'>
    { 
        resData.map((item)=>{
            return <RestCard key={item?.info?.id} resData={item}/>
        })
    }
    </div>
    </>
        }
    
   
    </>
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)