import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className='navbar is-transparent'>
    <div className='container'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <figure className='image'>
            <img src={logo} alt='Foundrs' style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>

      <div className='navbar-start' />

      <div className='navbar-end'>
        <Link className='navbar-item' to='/about'>
          About
        </Link>
        <Link className='navbar-item' to='/join'>
          Join
        </Link>
      </div>

    </div>
  </nav>
)

export default Navbar
