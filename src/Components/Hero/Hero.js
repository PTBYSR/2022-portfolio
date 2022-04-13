import React from 'react'
import { 
  Landing, 
  LandingCardOne,
  LandingCardTwo,
  LandingCardThree,
 } from './Hero.element'

function Hero() {
  return (
    <>
      <Landing className='bg-light flex container'>
        <LandingCardOne className="ff-mont fw-semibold fs-heading">
          <h1>Designer,</h1>
          <h1>Developer</h1>
        </LandingCardOne>
        <LandingCardTwo />
        <LandingCardThree className="flex ff-mont fw-semibold fs-heading">
          <div>
            <h1>Paul</h1>
            <h1>Emechebe</h1>
          </div>
        </LandingCardThree>
      </Landing>
    </>
  )
}

export default Hero