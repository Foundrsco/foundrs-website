import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import React from 'react'

export default class FadeUpWhenVisible extends React.Component {
  static defaultProps = {
    delay: 0,
    y: 48,
    inDuration: 500,
    outDuration: 200,
    partialVisibility: false
  }

  state = {
    loaded: false
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({loaded: true})
    }, 100)
  }

  render () {
    const {delay, y, outDuration, inDuration, partialVisibility} = this.props
    const Box = posed.div({
      popped: {
        y: 0,
        transition: { duration: inDuration },
        opacity: 1,
        delay: delay
      },
      hidden: {
        y: y,
        transition: { duration: outDuration },
        opacity: 0,
        delay: delay
      }
    })
    
    const {children, offset} = this.props
    const {firstRender} = this.state
    
    return (
      <TrackVisibility partialVisibility={partialVisibility} offset={offset}>
        {({ isVisible }) => <Box pose={(isVisible && loaded) ? 'popped' : 'hidden'}>{children}</Box>}
      </TrackVisibility>
    )
  }
}
