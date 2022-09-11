import React from 'react'
import '../styles/StartForm.css'
import {Link } from 'react-router-dom'

const Business = () => {
  return (
    <div>
         <form className='start-form'>


            <div className="form-control">
                <input type="text" id='namebusiness' placeholder='Username'/ >
            </div>

            <div className="form-control">
                <input type="text" id='categorybusiness' placeholder='Bussiness Name'/ >
            </div>

            <div className="form-control">
                <input type="Email" id='emailbusiness' placeholder='Email' required/>
            </div>

            <div className="form-control">
                <input type="number" id='numberbusiness' placeholder='Phone Number'/ >
            </div>

            <div className="form-control">
                <input type="alphanumerals" id='codebusiness' placeholder='Referral Code (optional) '/ >
            </div>

            <div className="terms">
               <small>By clicking the Sign Up button below, you agree to TradExpress <a href="#">terms and service</a> </small>
            </div>
            

            <Link to='/WelcomePage'>
              <button className="submit">Sign Up</button>
            </Link>
           
            <div className='userlink'>
               <small >Already have an account ? <Link to='/Login'>Click here</Link> </small>
            </div>

        </form>
    </div>
  )
}

export default Business