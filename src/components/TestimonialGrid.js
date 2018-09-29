import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import TestimonialItem from '../components/TestimonialItem'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible'

export default class TestimonialGrid extends React.Component {
  state = {
    items: [],
    numberToDisplay: 3,
    offset: 0,
    pose: 'fall'
  }

  static defaultProps = {
    testimonials: [],
    speed: 10000
  }

  constructor (props) {
    super(props)
    
  }

  nextSet = (specifiedOffset = null) => {
    console.log('nextSet', specifiedOffset)
    const {testimonials} = this.props
    const {offset, numberToDisplay} = this.state
    
    if(window.innerWidth < 1200) {
      this.setState({numberToDisplay: 2})
    } else {
      this.setState({numberToDisplay: 3})
    }

    const newOffset = specifiedOffset ? specifiedOffset : (offset + numberToDisplay)%(testimonials.length)
    console.log({newOffset})
    this.setState({
      pose: 'fall'
    })
    setTimeout( () => {
      this.setState({
        offset: newOffset, 
        items: testimonials.slice(newOffset, newOffset + this.state.numberToDisplay),
        pose: 'fall'
      })
    }, 600)

    setTimeout( () => {
      this.setState({
        pose: 'rise'
      })
    }, 650)
  }

  componentDidMount() {
    console.log('component did mount')
    if(!this.initialTimeout) {
      this.initialTimeout = setTimeout( () => this.nextSet(0), 100 )
      this.nextSetInterval = setInterval( () => {
        this.nextSet()
      }, this.props.speed )
    }
  }

  render () {
    const {style, fill} = this.props
    const {items, pose} = this.state
    return (
      <div 
        style={style || {marginTop: '4rem'}} 
        ref={(mount) => { this.mount = mount }}>
          <Columns centered>
            {items.map((item) => (
              <Columns.Column key={item.node.id} style={{paddingBottom: '4rem'}}>
                  <TestimonialItem
                    pose={pose}
                    fill={fill}
                    testimonial={item.node}
                    key={item.id} />                
              </Columns.Column>
            ))}
          </Columns>
      </div>
    )
  }
}
