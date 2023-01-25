import React from 'react'
import './Reviews.css'
import comma from '../../Media/coma.svg'



const ReviewCards = (props) => {

  return (
    <div className="review-card">
      <div className='review-bg'>
        <img src={comma} alt="comma" />
        <p>{props.p} </p>
      </div>
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={props.img} alt="profile" />
        </div>
          <p>{props.name}<br/><span>{props.location}</span></p>
      </div>
    </div>

  )
}

export default ReviewCards