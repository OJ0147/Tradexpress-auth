import React from 'react'
import './Reset.css'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div className='reset'>
        <div className='form-container'>
        <form className='reset-form'>
          <h1>Reset Your Password!</h1>
            
            <div className="form-control">
                <input type="text" id='name' placeholder='Username' className='reset-input'/ >
            </div>
            
            <button type='submit' className="form-btn">Reset Password</button>

            <div className='userlink'>
               <small >Already a User? <Link to='/Login'>Click here</Link> </small>
            </div>

        </form>
      </div>
    </div>
  )
}

export default Reset