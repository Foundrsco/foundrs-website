import React from 'react'
import TrackVisibility from 'react-on-screen'
import SplitText from 'react-pose-text'

export default class VisibleSplitText extends React.Component {
  render () {
    const {text} = this.props
    const charPoses = {
      enter: {
        opacity: 1,
        delay: ({ charIndex }) => charIndex * 5
      },
      exit: {
        opacity: 0.5,
        delay: ({ charIndex }) => charIndex * 2
      }
    }
    return (
      <TrackVisibility>
        {({ isVisible }) =>
          <span className={`variable-text-in ${isVisible ? 'enter' : 'exit'}`}>
            <SplitText
              visible={isVisible}
              initialPose='exit'
              pose={isVisible ? 'enter' : 'exit'}
              charPoses={charPoses}
            >
              {text}
            </SplitText>
          </span>
        }
      </TrackVisibility>
    )
  }
}
