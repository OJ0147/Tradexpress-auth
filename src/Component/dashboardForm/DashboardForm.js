import React from 'react'
import './DashboardForm.css'
import {CgArrowsExchange} from 'react-icons/cg'


const DashboardForm = ({name, sign, value}) => {
  const checked= true

  return (
    
    <div className='form-wrapper' >
      <nav className="transaction-type">
        <a href="#trade">Buy</a>
        <a href="#trade">Sell</a>
      </nav>
      <p>Select Coin</p>
      <div className="form-slide">
      <div className='coin-wrapper'>
        <input type="checkbox" id='bitcoin'/>
        <div className={checked? 'isChecked':'unChecked'}>
          <label htmlFor="bitcoin" className='checkbox-label'>
            <img src={'https://i.ibb.co/synpWr8/bitcoin.png'} alt="coin" />
            <h4> Bitcoin</h4>
            <p>{1.625} BTC</p>
          </label>
        </div>
      </div>

      <div className='coin-wrapper'>
        <input type="checkbox" id='usdt'/>
        <div className={checked? 'isChecked':'unChecked'}>
          <label htmlFor="usdt" className='checkbox-label'>
            <img src={'https://i.ibb.co/Jyqcdjq/Layer-x0020-1.png'} alt="coin" />
            <h4> USDT</h4>
            <p>$ {2257.57}</p>
          </label>
        </div>
      </div>

      <div className='coin-wrapper'>
        <input type="checkbox" id='ethereum'/>
        <div className={checked? 'isChecked':'unChecked'}>
          <label htmlFor="ethereum" className='checkbox-label'>
            <img src={'https://i.ibb.co/1Gbsxxx/Icon-awesome-ethereum.png'} alt="coin" />
            <h4>Ethereum</h4>
            <p>$ {10257.57}</p>
          </label>
        </div>
      </div>

      <div className='coin-wrapper'>
        <input type="checkbox" id='ltc'/>
        <div className={checked? 'isChecked':'unChecked'} >
          <label htmlFor="ltc" className='checkbox-label'>
            <img src={'https://i.ibb.co/kyd82Sb/litecoin.png'} alt="coin" />
            <h4>LTC</h4>
            <p>$ {2257.57}</p>
          </label>
        </div>
      </div>
      
      </div>
      <form >
        <label htmlFor="select-coin">Exchange</label>
        <div className="select-control">
          <select name="coin" id="select-coin">
            <option value="btc">Bitcoin(BTC)</option>
            <option value="usdt">USDT</option>
            <option value="eth">Ethereum</option>
            <option value="ltc">LTC</option>
          </select>
          <CgArrowsExchange size={30}/>
          <select name="currency" id="select-currency">
            <option value="NGN">Naira(NGN)</option>
            <option value="USD">Dollar(USD)</option>
            <option value="CAD">Dolar(CAD) </option>
            <option value="EUR">Euro(EUR) </option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="digit" id='amount' placeholder='enter amount'/>
        </div>
        <button className='form-btn'>Continue</button>
      </form>
    </div>
  )
}

export default DashboardForm