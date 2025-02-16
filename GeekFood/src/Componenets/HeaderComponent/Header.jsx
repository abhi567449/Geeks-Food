import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='nav'>
      <div className='logo-nav'>
        <span style={{fontWeight:"bolder",cursor:"pointer"}}>GeekFoods</span>
      </div>
      <div className='main-nav'>
            <ul className='list'>
                <li>Home</li>
                <li>Quote</li>
                <li>Restaurant</li>
                <li>Food</li>
                <li>Contact</li>
            </ul>
      </div>
      <div className='button'>
        <button className='start-button'>Get Started</button>
      </div>
    </div>
  )
}

export default Header
