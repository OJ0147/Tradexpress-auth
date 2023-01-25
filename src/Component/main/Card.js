import React from 'react'
import './Main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Card = (props) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, []);

  return (
    <div className='card' data-aos='zoom-in'>
      <div className="main-image">
        <img src={props.url} alt="" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default Card