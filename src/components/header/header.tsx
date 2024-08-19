import React, { useState } from 'react';
import './header.css';
import { HEADER_LOGO } from '../utils/common';
import { Link } from 'react-router-dom';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    return(
        <>
        <div className="header-parent">
            <img className="logo" src={HEADER_LOGO}></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact"> Contact Us</Link></li>
                <li>Cart</li>
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