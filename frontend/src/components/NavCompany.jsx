import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavCompany = () => {
  return (
    <div className="pl-24 pt-2 flex justify-between h-12 w-100 bg-white border-b border-gray-400">
        <div className="flex">
            <img className="w-8 h-8" src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo"/>
        </div>
        <div className="flex pr-24">
            <div className="flex flex-col pl-5">
                <FaHome/>
                <Link to="/company">Home</Link>
            </div>
            <div className="flex flex-col pl-5">
                <FaShoppingBag/>
                <Link to="/companyjobs">Jobs</Link>
            </div>

            
        </div>
    </div>
  )
}

export default NavCompany
