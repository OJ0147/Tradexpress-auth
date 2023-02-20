import React, { useState } from 'react'
import './Reset.css'
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail} from 'firebase/auth'

import { toast } from 'react-toastify'
import { auth } from '../../../firebase/config'
import Loader from '../../../Component/loader/Loader'

const Reset = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading]= useState(false)
  const navigate = useNavigate()

  const handleReset=(e)=>{
    e.preventDefault()

    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsLoading(false)
      toast.success('Check Email for Password reset')
      navigate('/Login')
    })
    .catch((error) => {
      toast.error('error.message')
      setIsLoading(false)
    });
  }

  return (
    <>
    {isLoading && <Loader/>}
    <div className='reset'>
        <div className='form-container'>
        <form className='reset-form' onSubmit={handleReset}>
          <h1>Reset Your Password!</h1>
            
            <div className="form-control">
                <input type="email" placeholder='Enter Email' className='reset-input' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
            <button type='submit' className="form-btn">Reset Password</button>

            <div className='userlink'>
               <small >Already a User? <Link to='/Login'>Click here</Link> </small>
            </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Reset