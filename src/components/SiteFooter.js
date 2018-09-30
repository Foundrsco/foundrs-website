import React from 'react'
import Chevrons from '../components/Chevrons'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible.js'
import Link from 'gatsby-link'
import Button from 'react-bulma-components/lib/components/button'
import NoSSR from 'react-no-ssr'

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
          <div style={{
            position: 'relative',
            margin: 'auto',
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }}>
            <p style={{
              backgroundColor: 'white',
              padding: '1rem',
              marginTop: '4rem',
              display: 'inline-block'}}><strong>&copy; Foundrs.co</strong> | Foundrs is a not for profit community organisation.
                Made with ❤ in London by <a style={{textDecoration: 'underline'}} href='https://stef.io'>Stef</a>.</p>
          </div>
          <NoSSR>
            <Chevrons
              rotation={180}
              weight={4}
              id='chevrons'
              foreground='#0a0a0a'
              background='#ffffff'
              width={window.innerWidth}
              height={window.innerHeight * 0.5}
              style={{display: 'block', position: 'absolute', zIndex: -1, top: '0px'}} />
          </NoSSR>
        </div>
      </div>
    )
  }
}
