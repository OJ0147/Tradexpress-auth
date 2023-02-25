import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'
import { motion } from "framer-motion"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice'
import ShowOnLogin, { ShowOnLogout } from '../hiddenRoutes/HiddenRoutes'


const Navlinks = (props) => {
  const animateFrom ={opacity: 0, y: -40}
  const animateTo ={opacity: 1, y: 0}

  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState("")
  const dispatch = useDispatch();

  // signout function
  
  const signOutUser=()=>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success("You're signed out")
      navigate('/Login')
    
    }).catch((error) => {
        // An error happened.
        toast.error('An error Occurred')
      });
  }

  // GET CURRENT USER FUNCTION AND ACTIVE STATE
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        // const uid = user.uid;
        if (user.displayName == null){
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          setDisplayName(uName)
        } else {
          setDisplayName(user.displayName)
        }


        dispatch(SET_ACTIVE_USER({
          email:user.email,
          userName: user.displayName? user.displayName: displayName,
          userID: user.uid,
        }))


      }else {
        setDisplayName('');
        dispatch(REMOVE_ACTIVE_USER());
      }

    });

  }, [dispatch, displayName])

  return (
    <div className='navlinks'>
        <ul onClick={()=> props.isMobile && props.closeMobileMenu()}>
            <ShowOnLogin>
            <motion.li 
              className='dashboard-route'
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.05}}>
            
                <Link to='/Dashboard' className='trade-link link'><p>{displayName}</p>  </Link>

            </motion.li>
            </ShowOnLogin>

            <motion.li 
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.05}}>

              <Link to='/Trade' className='trade-link link'>Instant Buy/Sell</Link>

            </motion.li>

            <motion.li className='learn'
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.10}}>
              
              <Link to='/Learn' className='learn-link link'>Learn</Link>

            </motion.li>
            <ShowOnLogout>
            <motion.li 
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.2}}>

              <Link  to='/Login'><button className='btn btn-trans'>Log in</button></Link>

            </motion.li>
            </ShowOnLogout>

            {/* LOG OUT BUTTON */}
            <ShowOnLogin>
            <motion.li 
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.2}}>

              <button className='btn btn-white' style={{color:"#7C20BE"}} onClick={signOutUser}>Logout</button>

            </motion.li>
            </ShowOnLogin>

            <ShowOnLogout>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.35}}>

              <Link  to='/Start'><button className='btn btn-white'style={{color:"#7C20BE"}}>Get Started</button></Link>

            </motion.li>
            </ShowOnLogout>
        </ul>
    </div>
  )
}

export default Navlinks