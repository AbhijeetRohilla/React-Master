import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import RestCard from './components/body/restrauntCard';
import './app.css'
import data from './output.json';


const App=()=>{
    let resData=[]
     resData=data?.cards;
    console.log(resData)
    
    return(
    <>
    <Header/>
    <div className='restCard'>
    { 
        resData.map((item)=>{
            return <RestCard resData={item}/>
        })
    }
    </div>
    </>
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)