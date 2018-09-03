import React from 'react'
import Link from 'gatsby-link'
import Button from 'react-bulma-components/lib/components/button'
import Image from 'react-bulma-components/lib/components/image'
import VisibleSplitText from './VisibleSplitText'
import FadeUpWhenVisible from './FadeUpWhenVisible'
import quoteStart from '../img/quote-marks-start.svg'
import quoteEnd from '../img/quote-marks-end.svg'

export default class TestimonialItem extends React.Component {
  render () {
    const {testimonial} = this.props
    const clipped = {
      clipPath: 'url(#inverted-equilateral-clip-path)',
      margin: 'auto',
      padding: '1rem'
    }
    return (
      <div
        style={{maxWidth: '24rem', margin: 'auto'}}
      >
        <div class='quote is-size-4'>
          <VisibleSplitText text={testimonial.frontmatter.testimonial} />
        </div>
        <FadeUpWhenVisible>
          <div>
            <Image
              size='128x128'
              className='is-rounded'
              alt={`A photo of ${testimonial.frontmatter.name}`}
              src={`/img/${testimonial.frontmatter.image}`}
              style={clipped}
            />
            <p>
              <span>
                {testimonial.frontmatter.name} &mdash;<span>&nbsp;</span>
                {testimonial.frontmatter.title}<span>&nbsp;</span>
                {testimonial.frontmatter.company}
              </span>

            </p>
          </div>
        </FadeUpWhenVisible>
        <style jsx>{`
          .quote:before {
            background-image: url(${quoteStart});
            background-repeat: no-repeat;
            background-size: 1.47rem 1rem;
            width: 2rem;
            height: 1rem;
            display: inline-block;
            content:"";
            margin-right: 1rem;
          }
          .quote:after {
            background-image: url(${quoteEnd});
            background-repeat: no-repeat;
            transform: rotate(90);
            background-size: 1.47rem 1rem;
            width: 2rem;
            height: 1rem;
            display: inline-block;
            content:"";
            margin-left: 1rem;
          }
        `}</style>
      </div>
    )
  }
}
