import React from 'react'
import '../styles/Trade.css'

const Sell = () => {
  return (
    <div className='trade-form'>
         <form>
            <div className="trade-control">
            <label htmlFor="sell">Coin to Sell</label>
            <select name="" id="sell">
                <option value="">Bitcoin (BTC)</option>
                <option value="">Bitcoin Cash</option>
                <option value="">Ethereum</option>
                <option value="">GMT</option>
                <option value="">Dogecoin</option>
                <option value="">Litecoin</option>
                <option value="">Cardano</option>
                <option value="">USDT</option>
                <option value="">BNB</option>
            </select>
            </div>

            <div className="trade-control">
            <label htmlFor="currencies">Currency</label>
            <select name="" id="currencies">
                <option value="">Naira (NGN)</option>
                <option value="">Dollar (USD)</option>
                <option value="">Canadian Dollar (CAD)</option>
                <option value="">Ghana Cedis (GHC)</option>
            </select>        
            </div>

            <div className="trade-control">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" placeholder='USD | 10,000' />
            </div>
            <button>Continue</button>
            
 

        </form>
    </div>
  )
}

export default Sell