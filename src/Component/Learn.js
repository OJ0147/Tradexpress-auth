import React from 'react'
import About from './About'
import Footer from './Footer'
import LearnCards from './LearnCards'
import LearnHeader from './LearnHeader'
import Stores from './Stores'

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