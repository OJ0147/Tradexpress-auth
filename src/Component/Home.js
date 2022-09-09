import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Reviews from './Reviews'
import Steps from './Steps'
import Stores from './Stores'
import Widget from './Widget'

const Home = () => {
  return (
    <div>
        <Header/>
        <Widget/>
        <Main/>
        <Steps/>
        <Stores/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Home