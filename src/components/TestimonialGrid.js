import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import TestimonialItem from '../components/TestimonialItem'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible'

export default class TestimonialGrid extends React.Component {
  state = {
    items: [],
    numberToDisplay: 3,
    offset: 0
  }

  static defaultProps = {
    testimonials: []
  }

  nextSet = (specifiedOffset = null) => {
    console.log('nextSet')
    const {testimonials} = this.props
    const {offset, numberToDisplay} = this.state
    
    if(window.innerWidth < 1200) {
      this.setState({numberToDisplay: 2})
    } else {
      this.setState({numberToDisplay: 3})
    }

    const newOffset = specifiedOffset ? specifiedOffset : (offset + numberToDisplay)%(testimonials.length - numberToDisplay)

    this.setState({
      offset: newOffset, 
      items: testimonials.slice(newOffset, newOffset + this.state.numberToDisplay)
    })
  }

  componentDidMount() {
    setTimeout( () => this.nextSet(0), 100 )
    setInterval( () => {
      this.nextSet()
    }, 5000 )
  }


  render () {
    const {style, fill} = this.props
    const {items} = this.state
    return (
      <div 
        style={style || {marginTop: '4rem'}} 
        ref={(mount) => { this.mount = mount }}>
        <FadeUpWhenVisible offset={200}>
          <Columns centered>
            {items.map((item) => (
              <Columns.Column key={item.node.id} style={{paddingBottom: '4rem'}}>
                
                  <TestimonialItem
                    fill={fill}
                    testimonial={item.node}
                    key={item.id} />
                
              </Columns.Column>
            ))}
          </Columns>
        </FadeUpWhenVisible>
      </div>
    )
  }
}
