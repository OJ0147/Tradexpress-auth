import React from 'react'
import '../../pages/auth/Register/StartForm.css'
import {Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import Loader from '../loader/Loader'



const Individual = () => {
  const [userName, setUserName] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate= useNavigate()
  

  const handleSubmit =(e)=>{
    
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('Password do not match')
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setIsLoading(false)
      toast.success('Registration Successful ☺')
      navigate('/Login')
      
    })
    .catch((error) => {
     
      toast.error(error.message)
      setIsLoading(false)
    // ..
    });

  }

  return (
    <>
    {isLoading && <Loader/>}
    <div>
         <form className='start-form' onSubmit={handleSubmit}>

          
            <div className="form-control">
                <input type="text"  placeholder='Username' required value={userName} onChange={(e)=>setUserName(e.target.value)} />
            </div>

            <div className="form-control">
                <input type="text"  placeholder='Full Name' required value={fullName} onChange={(e)=>setFullName(e.target.value)} />
            </div>

            <div className="form-control">
                <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="form-control">
                <input type="password"  placeholder='Password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className="form-control">
                <input type="password" placeholder='Comfirm Password' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            </div>

            <div className="terms">
               <small>By clicking the Sign Up button below, you agree to TradExpress <a href="#terms">terms and service</a> </small>
            </div>
            
            
              <button type='submit' className="form-btn">Sign Up</button>
            
            
            

            <div className='userlink'>
               <small >Already have an account ? <Link to='/Login'>Click here</Link> </small>
            </div>

        </form>
    </div>
    </>
  )
}

export default Individual