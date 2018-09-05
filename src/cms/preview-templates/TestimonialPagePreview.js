import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialTemplate } from '../../templates/testimonial'

const TestimonialPagePreview = ({ entry, getAsset }) => {
  return (
    <TestimonialTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      name={entry.getIn(['data', 'name'])}
      company={entry.getIn(['data', 'company'])}
      url={entry.getIn(['data', 'url'])}
      testimonial={entry.getIn(['data', 'testimonial'])}
    />
  )
}

TestimonialPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default TestimonialPagePreview
