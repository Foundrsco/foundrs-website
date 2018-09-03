import React from 'react'
import TrackVisibility from 'react-on-screen'
import SplitText from 'react-pose-text'

export default class VisibleSplitText extends React.Component {
  render () {
    const {text} = this.props
    const charPoses = {
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 5
      },
      exit: {
        opacity: 0,
        y: -10,
        delay: ({ charIndex }) => charIndex * 2
      }
    }
    return (
      <TrackVisibility>
        {({ isVisible }) => <SplitText
          visible={isVisible}
          initialPose='exit'
          pose={isVisible ? 'enter' : 'exit'}
          charPoses={charPoses}>
          {text}
        </SplitText>}
      </TrackVisibility>
    )
  }
}
