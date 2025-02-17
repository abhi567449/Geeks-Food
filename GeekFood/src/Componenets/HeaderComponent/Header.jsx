import React from 'react'
import './Header.css'
import logo from "../BodyComponent/logo.svg"

function Header() {

  return (
    <div className='nav'>
      <div className='logo-nav'>
        <img className='logo-image' src={logo}></img>
        <span style={{fontWeight:"bolder",cursor:"pointer",marginLeft:"10px",fontSize:"25px"}}>GeekFoods</span>
      </div>
      <div className='main-nav'>
            <ul className='list'>
                <li className='list-header' style={{color:"blue"}}>Home</li>
                <li className='list-header'>Quote</li>
                <li className='list-header'>Restaurant</li>
                <li className='list-header'>Food</li>
                <li className='list-header'>Contact</li>
            </ul>
      </div>
      <div className='button'>
        <button className='start-button'>Get Started</button>
      </div>
    </div>
  )
}

export default Header
