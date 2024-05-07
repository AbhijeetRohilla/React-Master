import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import RestCard from './components/body/restrauntCard';
import './app.css'

const App=()=>{
    
    return(
    <>
    <Header/>
    <div className='restCard'>
    <RestCard dish={'North Indian, South Indian'} res={'Big Bowl'} str={'4.1'} dist={25}/>
    <RestCard dish={'Non-Veg, Crispy Chicken'} res={'KFC'} str={'4.2'} dist={34}/>
    </div>
    </>
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)