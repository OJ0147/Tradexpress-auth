import React from 'react'
import '../styles/Main.css'


const Card = (props) => {
  return (
    <div className='card'>
        <div className="main-image">
            <img src={props.img} alt="" />
        </div>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        
    </div>
  )
}

export default Card