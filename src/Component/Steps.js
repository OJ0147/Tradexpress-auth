import React from 'react'
import free from '../Media/create-acct-illus.png'
import depo from '../Media/wallet.svg'
import trade from '../Media/Group 28.svg'
import '../styles/Steps.css'

const Steps = () => {
  return (
    <div className='steps-container'>
      <h1>Buy and Sell your Cryptocurrency in 3 simple steps</h1>

      <div className="step create">
        <div className="text-side">
          <span>1</span>
          <div>
            <h3> Create a free Account</h3>
            <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
          </div>

        </div>
        <div className="image-side">
          <img src={free} alt="" />
        </div>
      </div>

      <div className="step deposit">
        <div className="image-side">
          <img src={depo} alt="" />
        </div>
        <div className="text-side">
          <span>2</span>
          <div>
            <h3> Deposit</h3>
            <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
          </div>

        </div>

      </div>

      <div className="step trade-step">
        <div className="text-side">
          <span>3</span>
          <div>
            <h3> Buy/ Sell Crypto</h3>
            <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
          </div>
        </div>
        <div className="image-side">
          <img src={trade} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Steps