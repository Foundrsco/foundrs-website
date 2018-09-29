import React from 'react'
import TrackVisibility from 'react-on-screen'
import SplitText from 'react-pose-text'

export default class VisibleSplitText extends React.Component {
  state = {
    loaded: false
  }

  static defaultProps = {
    delay: 100
  }

  componentDidMount () {
    const {delay} = this.props
    setTimeout(() => {
      this.setState({loaded: true})
    }, delay)
  }

  render () {
    const {text} = this.props
    const {loaded} = this.state
    const charPoses = {
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 5
      },
      exit: {
        opacity: 0.5,
        y: 0,
        delay: ({ charIndex }) => charIndex * 2
      }
    }

    return (
      <TrackVisibility>
        {({ isVisible }) =>
          <span>{<span className={`variable-text-in ${(loaded && isVisible) ? 'enter' : 'exit'}`}>
            {text}
          </span>}</span>
        }
      </TrackVisibility>
    )

    // return (
    //   <TrackVisibility>
    //     {({ isVisible }) =>
    //       <span className={`variable-text-in ${isVisible ? 'enter' : 'exit'}`}>
    //         <SplitText
    //           visible={isVisible}
    //           initialPose='exit'
    //           pose={isVisible ? 'enter' : 'exit'}
    //           charPoses={charPoses}
    //         >
    //           {text}
    //         </SplitText>
    //       </span>
    //     }
    //   </TrackVisibility>
    // )
  }
}
