import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/components/header/header';
import RestCard from './src/components/body/restrauntCard';
import './app.css'
import data from './src/components/utils/output.json'
import { useState,useEffect } from 'react';


const App=()=>{
    const [resData, setResData]=useState(data?.cards);
    const handleSort=()=>{
       const filteredData= resData.filter((res)=>res?.info?.avgRating>4);
       setResData(filteredData)
        console.log(resData,"lopo")
    }
    
    return(
    <>
    <Header/>
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
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)