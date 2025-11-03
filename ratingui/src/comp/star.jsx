import React from 'react'

function Star({ star, rating, hover, color, ratingClick, hoverEnter, hoverLeave }) {
  return (
    <div>
     <span
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverEnter(star)}
      onMouseLeave={hoverLeave}
      className= 'star'


      style={{ color: star <= (rating || hover) ?  color : '#ccc' }}
      key={star}
    >{'\u2605'}</span>

    </div>
  )
}

export default Star