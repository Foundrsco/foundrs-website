import Link from 'gatsby-link'
import AnimatedLogo from './AnimatedLogo'
import React from 'react'
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
        color={'black'}
        active={open}
      >
        <Navbar.Brand>
          <Link aria-label="Foundrs" style={{lineHeight: '0'}} to="/" onClick={deactivateMenu}>
            <span style={{display: 'block', width: '150px', padding: '16px'}}>
              <AnimatedLogo fill='#ffffff' stroke='#ffffff' weight={1} />
            </span></Link>
          
          <Navbar.Burger
            active={open.toString()}
            onClick={toggleMenu}
            aria-label="Menu"
          />
        </Navbar.Brand>
        <Navbar.Menu active={open.toString()}>
          <Navbar.Container>
            
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item renderAs="div">
              <Link className='has-text-weight-bold has-text-light' onClick={deactivateMenu} to="/about">About</Link>
            </Navbar.Item>
            {/*<Navbar.Item renderAs="div">
              <Link className='has-text-weight-bold' onClick={deactivateMenu} to="/values">Values</Link>
            </Navbar.Item>*/}
            <Navbar.Item renderAs="div">
              <Button 
                renderAs={Link} 
                onClick={deactivateMenu} 
                to="/apply" 
                className='has-hover-weight' 
                color='white' outlined={true}>Apply to join</Button>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
