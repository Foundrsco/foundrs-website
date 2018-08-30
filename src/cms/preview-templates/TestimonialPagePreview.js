import React from 'react'
import PropTypes from 'prop-types'
import { TestimonialPageTemplate } from '../../templates/testimonial'

const TestimonialPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <TestimonialPageTemplate
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
