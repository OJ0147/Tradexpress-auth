import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navlinks = (props) => {
  return (
    <div className='navlinks'>
        <ul>
            <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link to='/Trade'>Instant Buy/Sell</Link>
            </li>
            <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link to='/Learn'>Learn</Link>
            </li>
            <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link  to='/Login'><button className='btn btn-trans'>Log in</button></Link>
            </li>
            <li onClick={()=> props.isMobile && props.closeMobileMenu()}>
              <Link  to='/Start'><button className='btn btn-white'>Get Started</button></Link>
            </li>
         
        </ul>
    </div>
  )
}

export default Navlinks