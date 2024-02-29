import { useState,React } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
