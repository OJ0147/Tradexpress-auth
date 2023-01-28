import React from 'react'
import Footer from '../../Component/footer/Footer'
import Header from '../../Component/Header/Header'
import Main from '../../Component/main/Main'
import Reviews from '../../Component/reviewComponents/Reviews'
import Steps from '../../Component/steps/Steps'
import Stores from '../../Component/storeLink/Stores'
import Widget from '../../Component/widget/Widget'
import './Home.css'


const Home = () => {
  return (
    <div className='homepage'>
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