import React from 'react'
import '../styles/Footer.css'
import copyright from '../Media/Group 78.svg'
import facebook from '../Media/Icon awesome-facebook.svg'
import twitter from '../Media/Icon awesome-twitter.svg'
import telegram from '../Media/Icon awesome-telegram.svg'
import whatsapp from '../Media/Icon ionic-logo-whatsapp.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-links">
            <div>
                <p>Products</p>
                <ul>
                    <li>Bitcoins</li>
                    <li>Alt</li>
                    <li>Fiat</li>
                    <li>Refill</li>
                    <li>P2P</li>
                </ul>
            </div>

            <div>
                <p>Learn</p>
                <ul>
                    <li>Blog</li>
                    <li>Help Center</li>
                </ul>
            </div>

            <div>
                <p>Contact</p>
                <ul>
                    <li>hello@tradeexpress.com</li>
                    <li>support@tradeexpress.com</li>
                    <div className="social-media">
                        <img src={twitter} alt="" />
                        <img src={telegram} alt="" />
                        <img src={whatsapp} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </ul>
            </div>

            <div>
                <p>Company</p>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Rates</li>
                    <li>Mobile</li>
                    
                </ul>
            </div>

            <div>
                <p>Legal</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Anti-Money Laundering</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>

        </div>
        <div className="copyright-img">
            <div>
                <img src={copyright} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Footer