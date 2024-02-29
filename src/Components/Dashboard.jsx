import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Dashboard.css"
import NumSel from './NumSel';
import Rules from './Rules';
const Dashboard = () => {
  const [score,setScore]=useState(0);
  const [numSel ,setNumSel]=useState(0);
  const [rand,setRand]=useState(1);
  const [show,setShow]=useState(false);
  useEffect(()=>{
    console.log("i am in dashboard",numSel);
  },[numSel])
  // console.log("i am in dashboard",numSel);
  const randHandler = ()=>{
    if(numSel===0){
      alert("Select a Number");
    }
    else{
      const val = Math.ceil(Math.random()*6);
      console.log("Rand No",val);
      setRand(val);
      if(val===numSel){
        setScore(score=>(score+val));
      }
      else{
        setScore(score=>(score-2));
      }
      setNumSel(undefined);
    }
  }
  useEffect(()=>{
    console.log("Total score updated:", score);
  },[rand]);
  const restHandler=()=>{
    setNumSel(undefined);
    setScore(0);
    setRand(1);
  }
  return (
    <div className='dash-wrapper'>
      <nav className='nav'>
        <div className='ttl-cont'>
          <p className='ttl-val'>{score}</p>
          <h1 className='ttl-src'>Total Score</h1>
        </div>
        <div className='box-cont'>
          <NumSel numSel={numSel} setNumSel={setNumSel} />
          <h1 className='ttl-src'>Select Number</h1>
        </div>
      </nav>
      {
        show===true?
        (<Rules show={show} setShow={setShow}/>)
        :
        (
          <main className='dash-main'>
        <img onClick={randHandler} className='dice-img' src={"images/dice_"+rand+".png"}/>
        <p className='dice-p'>Click on Dice to roll</p>
        <button onClick={restHandler} className='dice-btn'>Reset Score</button>
        <button onClick={()=>(setShow(true))} className='dice-btn show-rule'>Show Rule</button>
        <NavLink to="/" className="navlink-btn"><button className='dice-btn'>Home</button></NavLink>
      </main>
        )
      }
      
      {/* {
        show===true&&(<Rules show={show} setShow={setShow}/>)
      } */}
    </div>
  )
}

export default Dashboard
