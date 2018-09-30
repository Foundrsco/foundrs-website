import Link from 'gatsby-link'
import AnimatedLogo from './AnimatedLogo'
import React from 'react'
import Navbar from 'react-bulma-components/lib/components/navbar';
import Button from 'react-bulma-components/lib/components/button'
import windowScrollPosition from 'window-scroll-position'

export default class Navigation extends React.Component {
  state = {
    open: false,
    scrolled: false
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

  testScroll () {
    if(windowScrollPosition().top > window.innerHeight) {
      if(!this.state.scrolled) {
        this.setState({
          scrolled: true
        })
      }
    } else {
      if(this.state.scrolled) {
        this.setState({
          scrolled: false
        })
      }
    }
  }

  componentDidMount () {
    this.scrollInterval = setInterval(() => {
      this.testScroll()
    }, 500)
  }

  componentWillUnmount () {
    clearInterval(this.scrollInterval)
  }

  render () {
    const {open, scrolled} = this.state
    const toggleMenu = this.toggleMenu
    const deactivateMenu = this.deactivateMenu
    return (
      <Navbar
        fixed='top'
        color={'black'}
        active={open}
        style={{overflow: 'hidden'}}
      >
        <Navbar.Brand>
          <Link aria-label="Foundrs" style={{lineHeight: '0'}} to="/" onClick={deactivateMenu}>
            <span style={{display: 'block', width: '182px', padding: '16px'}}>
              <AnimatedLogo scrolled={scrolled} fill='#ffffff' stroke='#ffffff' weight={1} />
            </span></Link>
          
          <Navbar.Burger
            active={open.toString()}
            onClick={toggleMenu}
            aria-label="Menu"
          />
        </Navbar.Brand>
        <Navbar.Menu active={open.toString()} backgroundColor="black">
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
