import React from 'react'
import { Link } from "react-router-dom";
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavCompany = () => {
  return (
    <div className="pl-24 pt-2 flex justify-between h-12 w-100 bg-white border-b border-gray-400">
        <div className="flex">
            <img className="w-8 h-8" src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo"/>
        </div>
        <div className="flex pr-24">
            <div className="flex flex-col pl-5">
                <FontAwesomeIcon icon={faHome} />
                <Link to="/company">Home</Link>
            </div>
            <div className="flex flex-col pl-5">
                <FontAwesomeIcon icon={faBriefcase} />
                <Link to="/companyjobs">Jobs</Link>
            </div>
        </div>
    </div>
  )
}

export default NavCompany
