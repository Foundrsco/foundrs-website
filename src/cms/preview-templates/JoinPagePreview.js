import React from 'react'
import PropTypes from 'prop-types'
import { JoinPageTemplate } from '../../templates/join-page'

const JoinPagePreview = ({ entry, widgetFor }) => (
  <JoinPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

JoinPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default JoinPagePreview
