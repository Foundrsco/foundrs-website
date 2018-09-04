import SectionTriangle from '../components/SectionTriangle'
import React from 'react'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'

const Rising = posed.div({
  active: {
    y: 0,
    transition: { duration: 700 },
    opacity: 1,
    ease: 'easeInOut'
  },
  inactive: {
    y: 48,
    transition: { duration: 700 },
    opacity: 0,
    ease: 'easeInOut'
  }
})

const Falling = posed.div({
  active: {
    y: 0,
    transition: { duration: 700 },
    opacity: 1,
    ease: 'easeInOut'
  },
  inactive: {
    y: -48,
    transition: { duration: 700 },
    opacity: 0,
    ease: 'easeInOut'
  }
})

export default class TriangularMotif extends React.Component {
  render () {
    const {style, stroke, weight} = this.props
    return (
      <div style={style}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div>
              <Falling pose={isVisible ? 'active' : 'inactive'}>
                <SectionTriangle
                  style={{margin: 'auto'}}
                  foreground='transparent'
                  background='transparent'
                  stroke={stroke}
                  weight={weight} />
              </Falling>
              <Rising pose={isVisible ? 'active' : 'inactive'}>
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-6rem'}}
                  foreground='transparent'
                  background='transparent'
                  stroke={stroke}
                  weight={weight} />
              </Rising>
            </div>
          }
        </TrackVisibility>
      </div>
    )
  }
}
