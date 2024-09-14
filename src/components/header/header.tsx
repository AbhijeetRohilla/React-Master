import React, { useState,useEffect } from 'react';
import { HEADER_LOGO } from '../utils/common';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const status=useOnlineStatus();
    useEffect(()=>{
console.log(status,'sttaus')
    },[status])
    return(
        <>
        <div className="flex">
            <img className="w-36" src={HEADER_LOGO}></img>
            <ul className="flex justify-between mx-auto items-center float-right">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact"> Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery </Link></li>
                <li className="px-4">Status {status===true?"🟢":"🔴"}</li>
                <li className="px-4">Cart</li>
                <button className='btn-login' onClick={()=>{
                    if(btnName === "Login"){
                        setBtnName("Logout")
                    }
                    else{
                        setBtnName("Login")
                    }
                }}>{btnName}</button>
            </ul>
        </div>
        
        </>
    )
}
export default Header;