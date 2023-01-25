import React from 'react'
import {NavLink , Outlet} from 'react-router-dom'
import './StartForm.css'


const Start = () => {
  return (
    <div className='start'>
      <div>
        <h1>Welcome!</h1>
          <div className='form-container'>
            <nav className="select-type">
              <NavLink to='individual'>
                Individual
              </NavLink>
              <NavLink to='business'>
                Business
              </NavLink>
            </nav>
            <Outlet/>
          </div>
      </div>
    </div>
  )
}

export default Start