import React from 'react';
import ReactDOM from 'react-dom';

const Heading=()=>{
    return(
        <h1>I am Any heading....</h1>
    )
}

const Func=()=>{
    return(
    <>
        <Heading/>
        <div>I am function only :( </div>
    </>)
}
const App=()=>{
    
    return(
    <>
    <Func/>
<div>I am Main App!! :)</div>

    </>

    )
    
}
const root= ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App/>)