import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import React from 'react'

const Box = posed.div({
  popped: {
    y: 0,
    transition: { duration: 700 },
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
    const {children} = this.props
    return (
      <TrackVisibility>
        {({ isVisible }) => <Box pose={isVisible ? 'popped' : 'hidden'}>{children}</Box>}
      </TrackVisibility>
    )
  }
}
