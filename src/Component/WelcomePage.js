import React from 'react'
import maillogo from '../Media/mailing.svg'
import '../styles/WelcomePage.css'


const WelcomePage = () => {
  let gmail='https://accounts.google.com/v3/signin/identifier?dsh=S1410151305%3A1662902596421334&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWq6VyKlPkfJVZiPmQcWfwmWTMjj-KSe-m5r71nw01qxdSfhLANpEcS_fTwtDZ_d5dv9pV-w6A'
 
  return (
    <div className='welcomepage'>
        <div className='welcome-box' >
        
          <h1>You're Almost In!</h1>
          <h2>Welcome John Doe </h2>
          <img src={maillogo} alt="" />

          <p>An activation link has been sent to <a href="#">example@gmail.com</a> Please click on the link to verify your email and activate your TradExpress account.</p>

          <a href={gmail} target='_blank' className="continue">Continue</a>

          <small>Didn't get an email?<a href="#">Kindly click resend email</a>  </small><br />
          <small>Wrong email supplied?<a href="#">Edit email address</a> </small>


        </div>
    </div>
  )
}

export default WelcomePage