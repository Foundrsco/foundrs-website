import React from 'react'
import TrackVisibility from 'react-on-screen'

export default class LazyImage extends React.Component {
  render () {
    const {alt, src, className, style} = this.props
    const invisible = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    return (
      <TrackVisibility once offset={800}>
        {({ isVisible }) => <img src={isVisible ? src : invisible} alt={alt} style={style} className={className} />}
      </TrackVisibility>
    )
  }
}
