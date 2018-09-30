import React from 'react'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'

const Fading = posed.div({
  rise: {
    y: 0,
    transition: { duration: 2000 },
    opacity: 1,
    scale: 1,
    ease: 'circOut'
  },
  fall: {
    y: '24px',
    transition: { duration: 2000 },
    opacity: 0,
    scale: 1.5,
    ease: 'circIn'
  }
})

class LoadableImage extends React.Component {

  state = {
    loaded: false,
    image: null,
    src: null
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevProps.visible && !prevState.loaded && !prevState.image) {
      console.log('componentDidUpdate', {prevProps, prevState})
      const image = new Image()
      image.onload = () => this.setState({loaded: true})
      image.src = prevProps.src
      this.setState({image, src: prevProps.src})
    }
  }

  render () {
    const {loaded} = this.state
    const {visible, alt, src, className, style} = this.props
    const invisibleImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

    return (
      <Fading pose={(visible && loaded) ? 'rise' : 'fall'}>
        <img 
          src={(visible && loaded) ? src : invisibleImage} 
          alt={alt} 
          style={style} 
          className={className} />
      </Fading>
    )
  }
}

export default class LazyImage extends React.Component {
  
  render () {
    
    const {alt, src, className, style} = this.props
    return (
      <TrackVisibility once offset={800}>
        {({ isVisible }) => <LoadableImage 
          src={src}
          visible={isVisible} 
          alt={alt} 
          style={style} 
          className={className} />
        }
      </TrackVisibility>
    )
  }
}

