import React, {useEffect} from 'react'
import free from '../../Media/create-acct-illus.png'
import depo from '../../Media/wallet.svg'
import trade from '../../Media/Group 28.svg'
import './Steps.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Steps = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, []);

  return (
    <div className='steps-container'>
      <h1>Buy and Sell your Cryptocurrency in 3 simple steps</h1>

      <div className="step create" data-aos='fade-right'>
        <div className="text-side">
          <span>1</span>
          <div>
            <h3> Create a free Account</h3>
            <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
          </div>

        </div>
        <div className="image-side">
          <img src={free} alt="step1" />
        </div>
      </div>

      <div className="step deposit" data-aos='fade-left'>
        <div className="image-side">
          <img src={depo} alt="step2" />
        </div>
        <div className="text-side">
          <span>2</span>
          <div>
            <h3> Deposit</h3>
            <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
          </div>

        </div>

      </div>

      <div className="step trade-step" data-aos='fade-right'>
        <div className="text-side">
          <span>3</span>
          <div>
            <h3> Buy/ Sell Crypto</h3>
            <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</p>
          </div>
        </div>
        <div className="image-side">
          <img src={trade} alt="step3" />
        </div>
      </div>

    </div>
  )
}

export default Steps