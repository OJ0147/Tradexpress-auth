import React from 'react'
import aboutimg from '../Media/bitcoin-treading-analysis-5379606-4501720.png'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about-text">
        <h1>Learn and Trade with the best</h1>
        <p>TradEXpress is a fast-growing cryptocurrency exchange that makes it easy to buy, sell, and exchange cryptocurrency. At TradEXpress, We make buying Crypto as easy as buying a stock through an online brokerage. </p>
      </div>

      <div className="about-image">
        <img src={aboutimg} alt="" />
      </div>
    </div>
  )
}

export default About