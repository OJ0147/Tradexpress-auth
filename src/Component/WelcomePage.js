import React from 'react'
import maillogo from '../Media/mailing.svg'

const WelcomePage = () => {
  return (
    <div>
        <div className='form-container'>
        
          <h1>You're Almost In!</h1>
          <h1>Welcome james </h1>
          <img src={maillogo} alt="" />

          <p>An activation link has been sent to oj@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>

          <button className="continue">Continue</button>

          <small>Didn't get an email?<a href="#">Kindly click resend</a>  </small>
          <small>email Wrong email supplied?<a href="#">Edit email address</a> </small>


        </div>
    </div>
  )
}

export default WelcomePage