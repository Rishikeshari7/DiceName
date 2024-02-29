import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <div className='home-cont'>
        <div className='home-main'>
            <img className='home-img' src='/images/dices 1.png'/>
            <div className='home-paly-cont'>
                <h1 className='heading-dice'>DICE GAME</h1>
                <NavLink className="navlink" to="/dashboard"><button className='home-paly-cont-btn'>Play Now</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home
