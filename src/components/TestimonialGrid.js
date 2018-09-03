import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import TestimonialItem from '../components/TestimonialItem'

export default class TestimonialGrid extends React.Component {
  render () {
    const {testimonials, style} = this.props
    return (
      <div style={style || {marginTop: '4rem'}}>
        <Columns centered>
          {testimonials.map((item) => (
            <Columns.Column>
              <TestimonialItem
                testimonial={item.node}
                key={item.id} />
            </Columns.Column>
          ))}
        </Columns>
      </div>
    )
  }
}
