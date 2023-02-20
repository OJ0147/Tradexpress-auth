import React from 'react'
import { useEffect, useState } from 'react'
import './Widget.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {FaLongArrowAltDown, FaLongArrowAltUp }from 'react-icons/fa'


const Widget = () => {
    const [data, setData]=useState([])
    const [loading,setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('https://api.coinlore.net/api/tickers/?start=100&limit=30')
        .then((res)=>res.json())
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
            // console.log(response)
        })
        Aos.init({duration: 1000})
    })
    if(loading){
        return(
            <div>
                <h2>turn on network</h2>
            </div>
        )
    }
    return (
        <div className='widget-container' data-aos='fade-right'>
            {data.map((item)=>{
                const{id, symbol, percent_change_1h, percent_change_24h, price_usd}=item
                return(
                    <div >
                    <div className="data-container" key={id}>
                        <h2>{symbol}/NGN </h2>
                        <p>{percent_change_24h}% {percent_change_1h < 0 ?<FaLongArrowAltDown style={{color:'red'}}/> : <FaLongArrowAltUp style={{color:'green'}}/> } </p>
                    </div>
                    <p>&#8358;{Math.floor((price_usd)*734)} </p>
                    </div>
                )
            })}
                    
        </div>
    )
}

export default Widget