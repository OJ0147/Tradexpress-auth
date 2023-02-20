import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'
import { toast } from 'react-toastify'
import Loader from '../../../Component/loader/Loader'


const Login = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const loginUser =(e)=>{
    e.preventDefault()

    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setIsLoading(false)
      toast.success('Login Successful')
      navigate('/Dashboard')
    })
    .catch((error) => {
    
      toast.error(error.message)
      setIsLoading(false)
      
    });

  }


  return (
    <>
    {isLoading && <Loader/>}
    <div className='login'>
      <div className='form-container'>
        <h1>Welcome Back!</h1>
        <form className='log-form' onSubmit={loginUser}>
         
            
            <div className="form-control">
                <input type="email"  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="form-control">
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>


            <div className="passterms">
               <div><input type="checkbox" /><small>Remember Password </small></div> <Link to="/Reset">Forgot Password?</Link>
            </div>
            

            <button type='submit' className="form-btn">Sign Up</button>

            <div className='userlink'>
               <small >New User? <Link to='/Start'>Click here</Link> </small>
            </div>

        </form>
      </div>
    </div>
    </>
  )
}

export default Login