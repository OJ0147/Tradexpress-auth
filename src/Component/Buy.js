import React from 'react'
import '../styles/Trade.css'

const Buy = () => {
  return (
    <div className='trade-form' >
        <form>
            <div className="trade-control">
            <label htmlFor="buy">Coin to Buy</label>
            <select name="" id="buy">
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
            <label htmlFor="currency">Currency</label>
            <select name="" id="currency">
                <option value="">Naira (NGN)</option>
                <option value="">Dollar (USD)</option>
                <option value="">Canadian Dollar (CAD)</option>
                <option value="">Ghana Cedis (GHC)</option>
            </select>        
            </div>

            <div className="trade-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" placeholder='NGN | 3,000,000' />
            </div>
            <button>Continue</button>
            
 

        </form>
    </div>
  )
}

export default Buy