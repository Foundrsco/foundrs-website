import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import Hero from 'react-bulma-components/lib/components/hero'
import Typekit from 'react-typekit'

import '../layouts/all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Foundrs' description='A community of the best company founders' />
    <Typekit kitId='eiw6zwb' />
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
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
