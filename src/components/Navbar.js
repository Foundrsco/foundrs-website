import Link from 'gatsby-link'

import logo from '../img/foundrs-white-f-on-black.svg'

import React, { Fragment } from 'react'
import Navbar from 'react-bulma-components/lib/components/navbar';
import Button from 'react-bulma-components/lib/components/button'

export default class Navigation extends React.Component {
  state = {
    open: false
  }

  onClickNav = () => {
    console.log('clicked nav')
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open
    })
  }

  deactivateMenu = () => {
    this.setState({
      open: false
    })
  }

  render () {
    const {open} = this.state
    const toggleMenu = this.toggleMenu
    const deactivateMenu = this.deactivateMenu
    return (
      <Navbar
        fixed='top'
        transparent
        active={open}
      >
        <Navbar.Brand>
          <Link style={{lineHeight: '0'}} to="/" onClick={deactivateMenu}><img alt='Foundrs' src={logo} height='48' width='48' style={{height: '3.25rem', width: '3.25rem'}} /></Link>
          
          <Navbar.Burger
            active={open}
            onClick={toggleMenu}
          />
        </Navbar.Brand>
        <Navbar.Menu active={open}>
          <Navbar.Container>
            
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item as="div">
              <Link className='has-text-weight-bold' onClick={deactivateMenu} to="/about">About</Link>
            </Navbar.Item>
            <Navbar.Item as="div">
              <Link className='has-text-weight-bold' onClick={deactivateMenu} to="/values">Values</Link>
            </Navbar.Item>
            <Navbar.Item as="div">
              <Link className='has-text-weight-bold' onClick={deactivateMenu} to="/apply">
                <Button className='has-text-weight-bold' color='black'>Apply</Button>
              </Link>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
