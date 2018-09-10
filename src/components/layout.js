import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import '../layouts/all.sass'

const config = {
  google: {
    families: ['Source Sans Pro:300,600']
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Foundrs'
      meta={[
        { name: 'description', content: 'A community of the best company founders' },
        { name: 'google-site-verification', content: 'HAGUxrnqH6U0q1YibDaWpxcxzp3Carxts-kZYfd5ti8' }
      ]} />
    <Navbar />
    <div>{children}</div>
    <div style={{display: 'none'}}>
      <svg className='clip-svg'>
        <defs>
          <clipPath id='equilateral-clip-path' clipPathUnits='objectBoundingBox'>
            <polygon points='0 0.87, 0.5 0, 0.5 0, 1 0.87' />
          </clipPath>
        </defs>
      </svg>

      <svg className='clip-svg'>
        <defs>
          <clipPath id='inverted-equilateral-clip-path' clipPathUnits='objectBoundingBox'>
            <polygon points='0 0, 1 0, 0.5 0.87, 0 0' />
          </clipPath>
        </defs>
      </svg>

      <svg className='clip-svg'>
        <defs>
          <clipPath id='full-clip-path' clipPathUnits='objectBoundingBox'>
            <polygon points='0 1, 0.5 0, 0.5 0, 1 1' />
          </clipPath>
        </defs>
      </svg>
    </div>
    <style jsx global>{`
      @font-face {
        font-family: 'Jostvf';
        src: url('/fonts/jost-variable.ttf') format('truetype'),
          url('/fonts/jost-variable.woff') format('woff'),
          url('/fonts/jost-variable.woff2') format('woff2');
        font-weight: 1 999;
      }
    `}</style>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
