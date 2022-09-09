import React from 'react'
import ReviewCards from './ReviewCards'
import '../styles/Reviews.css'
import profile1 from '../Media/profile.png'
import profile2 from '../Media/Amina profile-modified.png'
import profile3 from '../Media/profilee-modified.png'

const Reviews = () => {
  return (
    <div className='review-container'>
        <div>
           <h1>Customer's Review</h1>
           <div className="content-reviews">
              <ReviewCards
              p='Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.'
              img={profile1}
              name='Ojugo'
              location='Nigeria'
              />
              <ReviewCards
              p='They have the best rate compared to other platforms with fast payout.'
              img={profile2}
              name='Amina'
              location='Canada'
              />
              <ReviewCards
              p='Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.'
              img={profile3}
              name='Bayo'
              location='Nigeria'
              />

            </div>
        </div>


    </div>
  )
}

export default Reviews