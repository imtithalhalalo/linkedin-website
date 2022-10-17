import React from 'react'

const FollowButton = (props) => {
  return (
    <button className="hover:bg-gray-200 text-center rounded-full w-24 bg-white border-2 text-gray-500 py-1 font-medium mt-2" 
    value={props.value} onClick={props.onClick}>{props.text}</button>
  )
}

export default FollowButton
