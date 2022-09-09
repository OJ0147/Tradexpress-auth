import React from 'react'
import Card from '../Component/Card'
import '../styles/Main.css'
import easy from '../Media/easy-transfer-ill.svg'
import freedom from '../Media/freedom.svg'
import invest from '../Media/undraw_Invest.png'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='main'>
        <h1 className='main-header'>Why do people get involved with Cryptocurrencies?</h1>
        <div className="card-container">
          <Card
          img={easy}
          h2='Easy Mode of Payment'
          p='People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.'
          />
          <Card
          img={freedom}
          h2='Financial Freedom'
          p='Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.'
          />
          <Card
          img={invest}
          h2='Invest'
          p='The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.'
          />

        </div>
        <div className="learn-btn-container">
        <Link to='/Learn'>
           <button className="learn-btn">Learn More</button>
        </Link>
        </div>
        
        
    </div>
  )
}

export default Main