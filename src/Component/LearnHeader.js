import React from 'react'
import learndesk from '../Media/login.png'
import '../styles/LearnHeader.css'

const LearnHeader = () => {
  return (
    <div className='learn-container'>
        <div className="learn-header">
            <h1>Earn free crypto through learning</h1>
            <p>Build your blockchain knowledge, complete quizzes, and earn free crypto.
              From Zero to crypto in minutes.
            </p>
            <button className="join">Join</button>

        </div>
        <div className="learn-image">
          <img src={learndesk} alt="" />

        </div>
    </div>
  )
}

export default LearnHeader