import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import TestimonialItem from '../components/TestimonialItem'

export default class TestimonialGrid extends React.Component {
  state = {
    items: []
  }

  constructor (props) {
    super(props)
    this.state = {
      items: props.testimonials.slice(0, 3)
    }
    setTimeout( () => this.setState({firstRender: false}), 1000 )
  }
  render () {
    const {style, fill} = this.props
    const {items} = this.state
    return (
      <div style={style || {marginTop: '4rem'}}>
        <Columns centered>
          {items.map((item) => (
            <Columns.Column key={item.node.id}>
              <TestimonialItem
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
