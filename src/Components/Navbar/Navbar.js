
import React from 'react'

function NavBar() {
  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
          <li className="active"><a className="fs-secondary" href="#">Home</a></li>
          <li><a className="fs-secondary text-light" href="#">Work</a></li>
          <li><a className="fs-secondary text-light" href="#">About</a></li>
          <li><a className="fs-secondary text-light" href="#">Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar