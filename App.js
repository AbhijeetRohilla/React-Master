import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import RestCard from './components/body/restrauntCard';

const App=()=>{
    
    return(
    <>
    <Header/>
    <RestCard/>
    </>
    ) 
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)