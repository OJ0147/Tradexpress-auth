import React from 'react'
import {Link} from 'react-router-dom'
import AppleLogo from '../Media/apple-black.svg'
import GoogleLogo from '../Media/playstore.svg'
import '../styles/Stores.css'

const Stores = () => {
    let applink ='https://www.apple.com/app-store/'
  let googlelink = 'https://play.google.com/store/apps'
  return (
    <div className="stores-grid-container">
        <div>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>

        <div className="linkss">
          <Link to='/Start'>
            <button>Get Started</button>
          </Link>
          <div className="stores">
            <div className='storelinks'>
              <a href={applink}><img src={AppleLogo} alt="" /><p><small>Download on the</small><br /> App Store</p></a>
            </div>
            <div className='storelinks'>
              <a href={googlelink} ><img src={GoogleLogo} /> <p><small>Get on</small><br /> Google Play</p></a>
            </div>
          </div>

        </div>
        </div>
        

    </div>
  )
}

export default Stores