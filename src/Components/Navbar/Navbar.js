import React from 'react'
import { Nav } from './Navbar.elements'


function NavBar() {
  return (
    <Nav className='flex bg-light'>
      <ul className="primary-navigation underline-indicators flex">
          <li className="active"><a className="fs-secondary text-dark" href="#">Home</a></li>
          <li><a className="fs-secondary text-dark" href="#">Work</a></li>
          <li><a className="fs-secondary text-dark" href="#">About</a></li>
          <li><a className="fs-secondary text-dark" href="#">Resume</a></li>
      </ul>
    </Nav>
  )
}

export default NavBar