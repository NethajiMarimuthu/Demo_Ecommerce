import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";
import { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";

const Nav = () => {
    const [state,setState]=useState("Home")
  return (
    <>
        <div className="navContain">
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <div>
                <ul>
                    <li>
                        <Link onClick={()=>setState("Home")} className={state==="Home"?"active":""} to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setState("Men")} className={state==="Men"?"active":""} to={"/men"}>Men</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setState("Women")} className={state==="Women"?"active":""} to={"/women"}>Women</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setState("Kids")} className={state==="Kids"?"active":""} to={"/kids"}>Kids</Link>
                    </li>
                </ul>
            </div>
            <div className="login">
                <Link to={"/cart"}><IoCartOutline className='cart' /></Link>
                <button>Login</button>
            </div>
        </div>
    </>
  )
}

export default Nav