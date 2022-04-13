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
        <LandingCardOne className="ff-mont">
          <h1 className="fw-semibold fs-heading">Designer,</h1>
          <h1 className="fw-semibold fs-heading">Developer</h1>
          <p>creating breathe-taking interfaces is what i love doing</p>
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