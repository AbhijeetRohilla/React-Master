import React from 'react';
import './header.css';
import { HEADER_LOGO } from '../utils/common';

const Header=()=>{
    return(
        <>
        <div className="header-parent">
            <img className="logo" src={HEADER_LOGO}></img>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </>
    )
}
export default Header;