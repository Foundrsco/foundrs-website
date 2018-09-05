import React from 'react'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'

const Fader = posed.div({
  starting: {
    transition: { duration: 500 },
    opacity: 0.1
  },
  scrolling: {
    transition: { duration: 500 },
    opacity: 1
  }
})

export default class FadeInOnStart extends React.Component {
  render () {
    const {children} = this.props
    return (
      <TrackVisibility offset={-100}>
        {({ isVisible }) => <Fader pose={isVisible ? 'scrolling' : 'starting'}>{children}</Fader>}
      </TrackVisibility>
    )
  }
}
