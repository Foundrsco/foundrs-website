import Footer from 'react-bulma-components/lib/components/footer'
import React from 'react'
import Chevrons from '../components/Chevrons'
import Section from 'react-bulma-components/lib/components/section'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible.js'
import Link from 'gatsby-link'
import Button from 'react-bulma-components/lib/components/button'

export default class SiteFooter extends React.Component {
  render () {
    return (
      <div>
        <div style={{marginBottom: '-1.5rem'}}>
          <FadeUpWhenVisible>
            <div style={{maxWidth: '30rem', margin: 'auto'}}>
              <div className='has-text-centered'>
                <Button renderAs={Link} to='/apply' className='is-large' color='black'>
                          Apply to join
                </Button>
              </div>
            </div>
          </FadeUpWhenVisible>

        </div>
        <div style={{textAlign: 'center', position: 'relative'}}>
          <p style={{position: 'relative',
            backgroundColor: 'white',
            padding: '1rem',
            margin: 'auto',
            marginTop: '4rem',
            display: 'inline-block'}}><strong>&copy; Foundrs.co</strong> | Foundrs is a not for profit community organisation. Made with ❤ in London.</p>
          <Chevrons
            rotation={180}
            weight={4}
            id='chevrons'
            foreground='#0a0a0a'
            background='#ffffff'
            width={typeof (window) === 'undefined' ? 1000 : window.innerWidth}
            height={typeof (window) === 'undefined' ? 1000 : window.innerHeight * 0.5}
            style={{display: 'block', position: 'absolute', zIndex: -1, top: '0px'}} />

        </div>
      </div>
    )
  }
}
