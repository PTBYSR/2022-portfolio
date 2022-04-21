import React from 'react'
import { Nav } from './Navbar.elements'
import { motion } from 'framer-motion';

function NavBar() {
  return (
    <Nav className='flex bg-light'>
      <ul className="primary-navigation underline-indicators flex">
          <li>
            <motion.a 
            whileHover={{ color: '#0094ce'}}
            onClick={() => null}
            className="fs-secondary text-dark" href="#"
            >Home
            </motion.a>
          </li>
          <li>
            <motion.a 
            whileHover={{ color: '#0094ce'}}
            onClick={() => null}
            className="fs-secondary text-dark" href="#"
            >Work
            </motion.a>
          </li>
          <li>
            <motion.a 
            whileHover={{ color: '#0094ce'}}
            onClick={() => null}
            className="fs-secondary text-dark" href="#"
            >Contact
            </motion.a>
          </li>
          <li>
            <motion.a 
            whileHover={{ color: '#0094ce'}}
            onClick={() => null}
            className="fs-secondary text-dark" href="#"
            >About me
            </motion.a>
          </li>
      </ul>
    </Nav>
  )
}

export default NavBar