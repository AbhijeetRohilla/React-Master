import React, { useState,useEffect,useContext } from 'react';
import { HEADER_LOGO } from '../utils/common';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Context1 from '../utils/context';
import { useSelector,useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    const status=useOnlineStatus();
    const data=useContext(Context1)
    const cartItem=useSelector((store:any)=>store.cart)


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
                <li className="px-4">Cart- {cartItem.items.length} items</li>
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