import React from 'react'
import '../styles/StartForm.css'
import {Link } from 'react-router-dom'



const Individual = () => {
  return (
    <div>
         <form className='start-form'>

          
            <div className="form-control">
                <input type="text" id='name' placeholder='Username'/ >
            </div>

            <div className="form-control">
                <input type="text" id='category' placeholder='Full Name'/ >
            </div>

            <div className="form-control">
                <input type="Email" id='email' placeholder='Email' required/>
            </div>

            <div className="form-control">
                <input type="number" id='number' placeholder='Phone Number'/ >
            </div>

            <div className="form-control">
                <input type="alphanumerals" id='code' placeholder='Referral Code (optional) '/ >
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

export default Individual