import React from 'react'
import loader from '../../Media/Hourglass.gif'
import  ReactDOM  from 'react-dom'
import './Loader.css'

const Loader = () => {
  return ReactDOM.createPortal (
    <div className='loader-wrapper'>
        <div className="loader-container">
          <img src={loader} alt="loader" />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader