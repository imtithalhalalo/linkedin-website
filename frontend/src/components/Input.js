import React from 'react'

const Input = (props) => {
  return (
    <>
        <label className='text-gray-800'>{props.text}</label>
        <input type="text" className="w-full h-10 border border-gray-800 rounded px-3" placeholder={props.text} value={props.value} onChange={props.onChange} />
    </>
  )
}

export default Input
