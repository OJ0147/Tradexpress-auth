
import './Slider.css'
import { coinsdata } from '../slideData/slideData'


const Slider = () => {


  return (
    <div className='slide-wrapper'>
        <div className="slide" >
            {coinsdata.map((coin, i)=>{
                const{name, value, sign} = coin;
                return(
                    <div key={i} >
                        <div className="coin-title">
                            <p className='coin-name'>{name} </p>
                            <p className='coin-value'>{value} {i===0? 'BTC': 'USD'} </p>
                        </div>
                        <div className="coin-sign">
                          <img src={sign} alt="coin"/>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Slider