import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import AppleLogo from '../../Media/Icon awesome-apple.svg'
import GoogleLogo from '../../Media/playstore.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Header = () => {
  let applink ='https://www.apple.com/app-store/'
  let googlelink = 'https://play.google.com/store/apps'

  useEffect(() => {
    Aos.init({duration: 1000})

  }, [])

  return (
    <div className='header'>
      <div className="text-container">
        <h1 data-aos="fade-down">Buy, sell and manage your Crypto on TradExpress.</h1>
        <p className='prgh'data-aos="fade-left">Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN. </p>
        <div className="links">
          <Link to='/Start'>
            <button data-aos="fade-left">Get Started</button>
          </Link>
          <div className="stores">
            <div className=" store" data-aos="fade-right">
              <a href={applink}><img src={AppleLogo} alt='mobilestore'/><p><small>Download on the</small><br /> App Store</p></a>
            </div>
            <div className=" store" data-aos="fade-left">
              <a href={googlelink} ><img src={GoogleLogo} alt='mobilestore'/> <p><small>Get on</small><br /> Google Play</p></a>
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