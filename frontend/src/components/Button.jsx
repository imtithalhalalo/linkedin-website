import React from 'react'

const Button = (props) => {
  return (
    <button className="text-center rounded-full w-48 bg-blue text-white py-3 font-medium mt-5" 
    onClick={props.onClick}>{props.text}</button>
  )
}

export default Button
