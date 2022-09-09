import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/Trade.css'

const Trade = () => {
  return (
    <div className='trade'>
      <div>
         <h1>Buy/Sell Instantly</h1>
         <div className='trade-container'>
           <nav className="trade-type">
             <NavLink to='buy'>
               Buy
             </NavLink>
             <NavLink to='sell'>
            Sell
             </NavLink>
           </nav>
           <Outlet/>
        
         </div>
      </div>
    </div>
  )
}

export default Trade