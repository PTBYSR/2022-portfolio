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
      <Landing className='bg-light flex'>
        <LandingCardOne>
          <h1>Designer,</h1>
          <h1>Developer</h1>
        </LandingCardOne>
        <LandingCardTwo />
        <LandingCardThree />
      </Landing>
    </>
  )
}

export default Hero