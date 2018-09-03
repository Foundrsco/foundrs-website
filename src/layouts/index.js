import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from '../components/Navbar'
import Hero from 'react-bulma-components/lib/components/hero'
import Typekit from 'react-typekit'

import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='Foundrs' />
    <Typekit kitId='eiw6zwb' />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
