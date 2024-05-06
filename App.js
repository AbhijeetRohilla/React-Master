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
    <RestCard/>
    <RestCard/>
    <RestCard/>
    <RestCard/>
    <RestCard/>
    <RestCard/>
    </div>
    </>
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)