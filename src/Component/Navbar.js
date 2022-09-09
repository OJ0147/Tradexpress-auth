import React from 'react'
import '../styles/Navbar.css'
import logo from '../Media/TradExpress.svg'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="navbar-container">

      <div className='navbar' >
      <Link to='/'>
        <img src={logo} className='logo' alt="" />
      </Link>
        
         
          <DesktopMenu/>
          <MobileMenu/>
          
      </div>
    </div>
    
  )
}

export default Navbar