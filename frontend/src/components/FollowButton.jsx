import React, { useState } from 'react'
import axios from 'axios';
const FollowButton = (props) => {
  const [onFollow, setOnFollow] = useState(false);
  const handleClick = async (event) => {
    event.preventDefault();
    const data = {
      follower: localStorage.getItem('id'),
      following: props.company_id
    }
    if (onFollow) {
      try {
        await axios.post(`http://localhost:3001/user/unfollow`, data,
          { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
          .then(response => {
            setOnFollow(false)
          });
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        await axios.post(`http://localhost:3001/user/follow`, data,
          { headers: { 'authorization': `Bearer ${localStorage.getItem(`token`)}` } })
          .then(response => {
            setOnFollow(true)
          });
      } catch (err) {
        console.error(err.message);
      }
    }

  }
  return (
    <button className="hover:bg-gray-200 text-center rounded-full w-24 bg-white border-2 text-gray-500 py-1 font-medium mt-2"
      company_id={props.value} onClick={handleClick}>{onFollow ? "Following" : "Follow"}</button>
  )
}

export default FollowButton
