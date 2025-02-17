import React from 'react'
import './Body.css'

function Body(props) {

  let {quote,author} = props.cards
  console.log(quote)
  console.log(author);
  return (
    <div className='card-div'>
      <h1 className='card-heading'>{quote}</h1>
      <p>{author}</p>
    </div>
  )
}

export default Body
