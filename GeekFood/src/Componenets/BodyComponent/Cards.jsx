import React from 'react'
import './cards.css'

export default function Cards(props) {
    

  const {item} = props.card
   let img = "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80";
  return (
    <div>   
       <div className='card-text'>
     <p>{item}</p>
    

    </div>
    <div className='review-account'>
    <img className='card-image-logo' src={img}></img>
    <div>
    <h1 className='name-account'>Gladis Lennon</h1>
    <p>Head of SEO</p>
    </div>
    </div>
    </div>

  )
}
