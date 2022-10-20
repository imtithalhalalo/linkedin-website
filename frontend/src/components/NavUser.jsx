import React, { useState } from 'react'

import { Link } from "react-router-dom";
import JobsSearched from './UserPage/JobsSearched';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faBriefcase, faBuilding, faUser, faBell } from '@fortawesome/free-solid-svg-icons'
const NavUser = () => {
  const [searchkey, setSearchKey] = useState('');
  const navigate = useNavigate();
  localStorage.setItem('key', searchkey);
  const search = () => {
    navigate('/search');
    console.log(searchkey)
    JobsSearched(searchkey);
  }

  return (
    <div className="pl-24 pt-2 flex justify-between h-12 w-100 bg-white border-b border-gray-400">
      <div className="flex">
        <img className="w-8 h-8" src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo" />
        <div className='w-72 h-8 bg-blue-50 rounded flex'>
        <div className='justify-self-center pl-3 pt-1'>
          <FontAwesomeIcon icon={faSearch} /> 
        </div>
        
        <input type="text" className="w-64 h-8 bg-blue-50 rounded px-3 ml-2" value={searchkey} onChange={(e) => setSearchKey(e.target.value)} placeholder=" Search" onKeyPress={event => {
          if (event.key === 'Enter') {
            search()
          }
        }} />
        </div>
        
      </div>
      <div className="flex pr-24">
        <div className="flex flex-col pl-5">
          <FontAwesomeIcon icon={faHome} />
          <Link to="/user">Home</Link>
        </div>
        <div className="flex flex-col pl-5">
          <FontAwesomeIcon icon={faBriefcase} />
          <Link to="/jobs">Jobs</Link>
        </div>
        <div className="flex flex-col pl-5">
          <FontAwesomeIcon icon={faBuilding} />
          <Link to="/companies">Companies</Link>
        </div>
        <div className="flex flex-col pl-5">
          <FontAwesomeIcon icon={faBell} />
          <Link to="/notifications">Notifications</Link>
        </div>
      </div>
    </div>
  )
}

export default NavUser
