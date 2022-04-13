import React from 'react'
import NavBar from '../Navbar/Navbar';
// import { Nav } from '../Navbar/Navbar.elements'
import { ReactComponent as ArrowDown } from './arrow-down.svg'
import { 
  Landing, 
  LandingCardOne,
  LandingCardTwo,
  LandingCardThree
} from './Hero.element'

function Hero() {
  return (
    <>
      <Landing className='bg-light flex container'>
        <LandingCardOne className="">
          <h1 className="ff-mont fw-semibold fs-heading">DESIGNER,</h1>
          <h1 className="ff-mont fw-semibold fs-heading">DEVELOPER</h1>
          <p className="ff-cabin">
            I am a <span className="fw-semibold text-accent-dark">creative developer</span>,<br/>
            i build breathe-taking<br/>
            interfaces with front-end technologies.</p>
            <ArrowDown />
        </LandingCardOne>
        <LandingCardTwo />
        <LandingCardThree className="flex">
          <NavBar />
          <div>
            <h1 className="ff-mont fw-semibold fs-heading">PAUL<br/>
            EMECHEBE</h1>
          </div>
        </LandingCardThree>
      </Landing>
    </>
  )
}

export default Hero