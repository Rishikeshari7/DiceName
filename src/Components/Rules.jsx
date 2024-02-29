import React from 'react'
import "./Rule.css"

const Rules = ({setShow}) => {
  return (
    <div className='rule-cont'>
    <div>
    <h1 className='rule-h'>How to play dice game</h1>
      <ul>
        <li className='rule-p'>Select any number</li>
        <li className='rule-p'>Click on dice image</li>
        <li className='rule-p'>After click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li className='rule-p'>if you get wrong guess then  2 point will be dedcuted </li>
      </ul>
    </div>
      <button  onClick={()=>(setShow(false))} className='exit'>x</button>
    </div>
  )
}

export default Rules
