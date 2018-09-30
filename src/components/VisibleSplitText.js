import React from 'react'
import TrackVisibility from 'react-on-screen'

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

    return (
      <TrackVisibility>
        {({ isVisible }) =>
          <span>{<span className={`variable-text-in ${(loaded && isVisible) ? 'enter' : 'exit'}`}>
            {text}
          </span>}</span>
        }
      </TrackVisibility>
    )
  }
}
