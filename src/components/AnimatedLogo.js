import React, {Fragment} from 'react'
import {Parallax} from 'react-scroll-parallax'
import Plx from 'react-plx'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const LetterF = {
  path: <path className='f' vectorEffect='non-scaling-stroke' d='M0,0H376.48L0,512Z' strokeLinecap='square' strokeLinejoin='miter' />,
  bounds: [376.48, 512]
}

const LetterO = {
  path: <path className='o' vectorEffect='non-scaling-stroke' d='M.24,135.71C1.44,72.09,54,12.7,117.55,2.87,132.25.6,147.34.18,162.25.11c28.44-.13,56.93-.43,85.3,1.18,62.77,3.57,119.8,57.56,128,120.1a202.58,202.58,0,0,1,1.66,25.73c.1,34.45,1.62,181.06,1.63,219.91,0,70-46.71,127.55-115.13,141.58-14.27,2.93-29.24,3.17-43.9,3.28-28.69.22-57.41.13-86.07-1C70.15,508.46,10.91,453.5,3.11,390.26A275.59,275.59,0,0,1,1,358.69c-.26-34-1.53-182.63-.77-223' strokeLinecap='square' strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const LetterU = {
  path: <path className='u' vectorEffect='non-scaling-stroke' d='M377.61,0s.54,245.34.24,364.3c-.18,71.86-47.13,130.42-116.51,144-19.05,3.74-39,3.66-58.58,3.66-27.17,0-54.55.26-81.47-2.84-58.92-6.78-110.1-58-119.05-116.87a185.19,185.19,0,0,1-2.25-28C.15,257.69,0,0,0,0z' strokeLinecap='square' strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const LetterN = {
  path: <path className='n' vectorEffect='non-scaling-stroke' d='M375.15,512,115.31,361.69,0,511.74V0H375.15Z' strokeLinecap='butt' strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const LetterD = {
  path: <path className='d' vectorEffect='non-scaling-stroke' d='M0,.4S134.66-.82,193.23,1C274.75,3.5,346.3,60.05,368.86,139.07c5.07,17.75,7.3,36.77,7.81,55.29,1.14,40.9.49,81.85.33,122.78-.4,98.89-72.67,181.26-170.57,192.37-29.36,3.33-59.27,2.19-88.93,2.42C80,512.23,0,511.44,0,511.44Z' strokeLinecap='square' strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const LetterR = {
  path: <path className='r' vectorEffect='non-scaling-stroke' d='M0,0S248-.37,248.94.18c15.19,0,30.37.69,45.13,4.9,40.54,11.54,74.47,49.73,80.86,91.19A101.66,101.66,0,0,1,376,110c.36,21.67.77,43.35.76,65,0,11.64.2,23.36-2.19,34.85-9.55,45.92-36.26,76.54-81.2,90.83-.78.25-1.56.46-2.7.8l86.46,210.33L115.7,353.19,0,511.67Z' strokeLinecap='square' strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const LetterS = {
  path: <path
    className='s'
    vectorEffect='non-scaling-stroke'
    d='M152,304.7c-1.36,0-24.13.28-34.71-.06-19.11-.62-37.63-4.08-54.71-13.13-33.7-17.87-53.75-45.87-60.38-83.13-1.92-10.8-2.07-22-2.14-33-.14-22.52,0-45.05.63-67.56.66-23.27,9.13-43.91,23.39-62.16,16.4-21,37.19-35.6,63.34-42C99.52.69,111.92.07,124.33,0,167.18-.09,334,.17,374.57.3L222.69,208.7s35-1.36,46-.3C316.81,213,350,237.95,368,282.71a109.57,109.57,0,0,1,7.47,41.57c-.1,26.86,0,53.73-.56,80.58-.39,20.27-7.32,38.65-18.74,55.27-16.61,24.18-38.75,40.91-67.51,48.17-11.84,3-24,3.67-36.17,3.68-70.12.07-252-.2-252-.2S41,456.08,83.62,397.71c24.46-33.47,49.65-67.81z'
    strokeLinecap='square'
    strokeLinejoin='miter' />,
  bounds: [378.82, 512]
}

const word = [LetterF, LetterO, LetterU, LetterN, LetterD, LetterR, LetterS]

class FoundrsWord extends React.Component {
  render () {
    const {weight, className} = this.props

    return (
      <div className='foundrs-word'>
        {word.map((WordLetter, i) =>
          <Letter
            key={i}
            index={i + 1}
            letter={WordLetter}
            weight={weight}
            style={{width: '100%'}} />
        )}
      </div>
    )
  }
}

class Letter extends React.Component {
  render () {
    const { letter, weight, index } = this.props
    const offset = 0 + index * 20
    const isSlower = false //! !getRandomInt(0, 1)
    const translation = -0.1
    const parallaxData = [{
      start: 'self',
      end: '100vh',
      properties: [
        {
          startValue: 1,
          endValue: 0.5,
          property: 'scale'
        },
        {
          startValue: 0,
          endValue: 1000 + (100 - ((index > 3) ? 4 + (4 - index) : index) * 200),
          property: 'translateY'
        }
      ]
    }
    ]
    return (
      <div className='letter'>
        <Plx parallaxData={parallaxData}>
          <svg viewBox={`0 0 ${378.82 + 8 * weight} ${512 + 8 * weight}`}>
            <g transform={`translate(${weight * 4} ${weight * 4} )`} >
              {letter.path}
            </g>
          </svg>
        </Plx>
      </div>
    )
  }
}

class AnimatedLogo extends React.Component {
  render () {
    const {stroke, fill, weight} = this.props
    const oneSeventh = 14.2857142857
    const letterStyle = {width: `${oneSeventh}%`}
    return (
      <Fragment>
        <FoundrsWord weight={weight} />

        <style jsx>{`

          .foundrs-word {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 2%;
            width: 100%;
            margin: auto;
          }

          path {
            stroke: ${stroke || '#222'};
            fill: ${fill};
            stroke-width: ${weight || 1};
            animation-delay: 0s;
            stroke-dasharray: 1 4000;
            stroke-dashoffset: 20;
            animation-name: dash;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
          }

          .o {
            animation-delay: 0.2s;
          }

          .u {
            animation-delay: 0.4s;
          }

          .n{
            animation-delay: 0.6s;
          }

          .d {
            animation-delay: 0.8s;
          }

          .e {
            animation-delay: 1.0s;
          }

          .r {
            animation-delay: 1.2s;
          }

          .s {
            animation-delay: 1.4s;
          }

          @keyframes dash {
            to {
              stroke-dasharray: 4000 4000
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default AnimatedLogo
