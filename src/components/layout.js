import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import SiteFooter from '../components/SiteFooter'
import '../layouts/all.sass'
import sharingImage from '../img/foundrs-icon-huge.png'

const TemplateWrapper = ({ children }) => (
  <div style={{padding: '0px'}}>
    <Helmet title='Foundrs'
      meta={[
        { name: 'description', content: 'A community of the best company founders' },
        { name: 'google-site-verification', content: 'eZ3YKOvX8Frm-jT8dItfYIqidBXRESz0TPL-vZktBEU' }
      ]}>
      <link rel='preload' href='/fonts/jost-variable.woff2' as='font' type='font/woff2' crossorigin />
      <link rel='preload' href='/fonts/jost-variable.woff' as='font' type='font/woff' crossorigin />
      <Helmet>
        <meta property='og:image' content={sharingImage} />
      </Helmet>
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <SiteFooter />
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
    <style>{`
      // Mini reset for FOUC
      // Blocks
      html,
      body,
      p,
      ol,
      ul,
      li,
      dl,
      dt,
      dd,
      blockquote,
      figure,
      fieldset,
      legend,
      textarea,
      pre,
      iframe,
      hr,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0; }

      // Headings
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 100%;
        font-weight: normal; }

      // List
      ul {
        list-style: none; }

      // Form
      button,
      input,
      select,
      textarea {
        margin: 0; }

      // Box sizing
      html {
        box-sizing: border-box; }

      * {
        &,
        &::before,
        &::after {
          box-sizing: inherit; } }

      // Media
      img,
      audio,
      video {
        height: auto;
        max-width: 100%; }

      // Iframe
      iframe {
        border: 0; }

      // Table
      table {
        border-collapse: collapse;
        border-spacing: 0; }

      td,
      th {
        padding: 0;
        text-align: left; }

      @font-face {
        font-family: 'Jostvf';
        src: url('/fonts/jost-variable.ttf') format('truetype'),
          url('/fonts/jost-variable.woff') format('woff'),
          url('/fonts/jost-variable.woff2') format('woff2');
        font-weight: 1 999;
      }

      body {
        font-family: "Jostvf", BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif
        padding: 0px;
        margin: 0px;
      }

      * {
        box-sizing: border-box;
      }

      div {
      }

      nav a {
        color: white;
        text-decoration: none;
      }

    `}</style>
    <style>{`
      
    `}</style>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.object
}

export default TemplateWrapper
