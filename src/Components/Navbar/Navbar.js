import React from 'react'

function NavBar() {
  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
          <li className="active"><a className="text-secondary fs-secondary" href="#">Home</a></li>
          <li><a className="text-secondary fs-secondary" href="#">Work</a></li>
          <li><a className="text-secondary fs-secondary" href="#">About</a></li>
          <li><a className="text-secondary fs-secondary" href="#">Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar