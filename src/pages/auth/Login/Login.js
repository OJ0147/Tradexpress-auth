import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='form-container'>
        <form className='log-form'>
          <h1>Welcome Back!</h1>
            
            <div className="form-control">
                <input type="text" id='name' placeholder='Username'/ >
            </div>

            <div className="form-control">
                <input type="password" id='password' placeholder='Password'/ >
            </div>


            <div className="passterms">
               <div><input type="checkbox" /><small>Remember Password </small></div> <Link to="/Reset">Forgot Password?</Link>
            </div>
            

            <button className="form-btn">Sign Up</button>

            <div className='userlink'>
               <small >New User? <Link to='/Start'>Click here</Link> </small>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Login