import React from "react";
import '../styles/LearnCards.css'

const LearnCards = () => {
  return (
    <div className="learncards-container">
      <div>
        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                   <span>#1</span> <h3>Register Account</h3>
                </div>
                <p>
                   Register a TradExpress account from the TradExpress App,
                   TradExpress website, or TradExpress Desktop App with your email or
                   phone number.
                </p>
            </div>
        </div>

        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                   <span>#2</span> <h3>Complete Verification</h3>
                </div>
                <p>
                   You can complete Identity Verification on your TradExpress account
                   to unlock the fiat deposit and withdrawal limits. This process
                   typically takes a few minutes to complete, which includes
                   verifying your basic account information, providing ID
                   documentation, and uploading a selfie/portrait..
                </p>
          </div>
        </div>

        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                   <span>#3</span> <h3>Crypto Deposit</h3>
                </div>
                <p>
                    If you already hold crypto in another wallet, you can deposit them
                    into your TradExpress Wallet. Please refer to the FAQ here for
                    more information on how to deposit and withdraw crypto on your
                    TradExpress account.
                </p>
            </div>
        </div>

        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                    <span>#4</span> <h3>Buy Crypto</h3>
                </div>
                <p>
                    Depending on your country, you can deposit up to 50+ fiat
                    currencies, such as NGN, USD, and AUD to your TradExpress account
                    using bank transfer and bank cards. You can find these different
                    fiat channels here. Once deposited, you can use them to buy crypto
                    directly.
                </p>
            </div>
        </div>

        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                    <span>#5</span> <h3>Explore Products</h3>
                </div>
                <p>
                    After getting your first crypto, you can start exploring our
                    versatile trading products. In the Spot market, you can trade
                    hundreds of crypto
                </p>
            </div>
        </div>

        <div className="cardlearn">
            <div className="cardtext">
                <div className="cardheadtext">
                    <h3>TradExpress Earn</h3>
                </div>
                <p>
                    If you are not interested in trading but still looking to increase
                    your crypto holdings, you can try TradExpress Earn. It offers a
                    complete suite of financial products for you to grow your passive
                    income
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCards;
