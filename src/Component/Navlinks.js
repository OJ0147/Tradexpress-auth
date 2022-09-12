import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import { motion } from "framer-motion"

const Navlinks = (props) => {
  const animateFrom ={opacity: 0, y: -40}
  const animateTo ={opacity: 1, y: 0}
  return (
    <div className='navlinks'>
        <ul>
            <motion.li 
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.05}}
            onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link to='/Trade'>Instant Buy/Sell</Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.10}}
             onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link to='/Learn'>Learn</Link>
            </motion.li>
            <motion.li 
               initial={animateFrom}
               animate={animateTo}
               transition={{delay:0.2}}
            onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link  to='/Login'><button className='btn btn-trans'>Log in</button></Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.35}}
            onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link  to='/Start'><button className='btn btn-white'>Get Started</button></Link>
            </motion.li>
         
        </ul>
    </div>
  )
}

export default Navlinks