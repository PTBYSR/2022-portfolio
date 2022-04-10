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
        <LandingCardOne />
        <LandingCardTwo />
        <LandingCardThree />
      </Landing>
    </>
  )
}

export default Hero