import React from 'react'

export default class QuoteMark extends React.Component {
  render () {
    const {fill, mode, style} = this.props
    if (mode === 'start') {
      return (<svg viewBox='0 0 757.76 512' style={style}>
        <polygon fill={fill} points='757.75 512 378.88 512 757.75 0 757.75 512' /><polygon fill={fill} points='378.88 512 0 512 378.88 0 378.88 512' />
      </svg>)
    }
    if (mode === 'end') {
      return (<svg viewBox='0 0 757.76 512' style={style}>
        <polygon fill={fill} points='0 0 378.88 0 0 512 0 0' /><polygon fill={fill} points='378.88 0 757.75 0 378.88 512 378.88 0' />
      </svg>)
    }
  }
}
