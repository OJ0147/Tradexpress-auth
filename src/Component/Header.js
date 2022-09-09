import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import AppleLogo from '../Media/Icon awesome-apple.svg'
import GoogleLogo from '../Media/playstore.svg'

const Header = () => {
  let applink ='https://www.apple.com/app-store/'
  let googlelink = 'https://play.google.com/store/apps'
  return (
    <div className='header'>
      <div className="text-container">
        <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
        <p className='prgh'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN. </p>
        <div className="links">
          <Link to='/Start'>
            <button>Get Started</button>
          </Link>
          <div className="stores">
            <div className=" store">
              <a href={applink}><img src={AppleLogo} alt="" /><p><small>Download on the</small><br /> App Store</p></a>
            </div>
            <div className=" store">
              <a href={googlelink} ><img src={GoogleLogo} alt="" /> <p><small>Get on</small><br /> Google Play</p></a>
            </div>
          </div>

        </div>

      </div>
      {/* for the bigger circle */}
      <div className="bg-image">
        <div className="big">
          <div className="big-outer">
            <div className="big-inner">

            </div>
          </div>
        </div>

      {/*for the smaller circle  */}
        <div className="small">
          <div className="small-outer">
            <div className="small-inner">

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header