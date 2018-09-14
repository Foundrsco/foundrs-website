import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import React from 'react'

const Box = posed.div({
  popped: {
    y: 0,
    transition: { duration: 500 },
    opacity: 1
  },
  hidden: {
    y: 48,
    transition: { duration: 200 },
    opacity: 0
  }
})

export default class FadeUpWhenVisible extends React.Component {
  render () {
    const {children, offset} = this.props
    return (
      <TrackVisibility offset={offset}>
        {({ isVisible }) => <Box pose={isVisible ? 'popped' : 'hidden'}>{children}</Box>}
      </TrackVisibility>
    )
  }
}
