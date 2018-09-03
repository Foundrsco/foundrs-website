import React from 'react'

export default class SectionTriangle extends React.Component {
  render () {
    const {foreground, background} = this.props
    return (
      <div style={{backgroundColor: background, lineHeight: '0'}}>
        <svg overflow='visible' width='100' height='87' style={{width: '100%', height: 'auto'}} viewBox='0 0 100 87'>
          <polygon points='0 87, 50 0, 50 0, 100 87' stroke={foreground} fill={foreground} />
        </svg>
      </div>
    )
  }
}
