import React, { useState } from 'react'
import Navlinks from './Navlinks'
import '../styles/Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const MobileMenu = () => {
  const[state, setState]=useState(false)
  const closeMobileMenu = ()=> setState(false)
  return (
    <nav className='mobilemenu'>
      <a href="#"onClick={()=>setState(!state)}>{state?<FaTimes size={30} style={{color:'#fff'}}/> : <FaBars size={30} style={{color:'#fff'}}/>} </a>
        {state && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileMenu