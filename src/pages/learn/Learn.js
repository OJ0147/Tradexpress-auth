import React from 'react'
import About from '../../Component/About/About'
import Footer from '../../Component/footer/Footer'
import LearnCards from '../../Component/learnComponents/LearnCards'
import LearnHeader from '../../Component/learnComponents/LearnHeader'
import Stores from '../../Component/storeLink/Stores'

const Learn = () => {
  return (
    <div>
      <LearnHeader/>
      <About/>
      <LearnCards/>
      <Stores/>
      <Footer/>
    </div>
  )
}

export default Learn