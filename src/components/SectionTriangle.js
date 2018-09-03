import React from 'react'

export default class SectionTriangle extends React.Component {
  render () {
    const {foreground, background, style} = this.props
    let {stroke, weight} = this.props
    stroke = stroke || foreground
    weight = weight || 1
    return (
      <div style={style || {}}>
        <div style={{backgroundColor: background, lineHeight: '0'}}>
          <svg overflow='visible' width={100 + weight * 2} height={87 + weight * 2} style={{width: '100%', height: 'auto'}} viewBox='0 0 100 87'>
            <polygon points='0 87, 50 0, 50 0, 100 87' strokeWidth={weight} stroke={stroke} fill={foreground} />
          </svg>
        </div>
      </div>
    )
  }
}
