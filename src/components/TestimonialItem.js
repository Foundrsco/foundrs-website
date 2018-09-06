import React from 'react'
import Link from 'gatsby-link'
import Button from 'react-bulma-components/lib/components/button'
import Image from 'react-bulma-components/lib/components/image'
import VisibleSplitText from './VisibleSplitText'
import FadeUpWhenVisible from './FadeUpWhenVisible'
import quoteStart from '../img/quote-marks-start.svg'
import quoteEnd from '../img/quote-marks-end.svg'
import Imgix from 'react-imgix'
import LazyImage from './LazyImage'

export default class TestimonialItem extends React.Component {
  render () {
    const {testimonial} = this.props

    return (
      <article
        style={{maxWidth: '24rem', margin: 'auto'}}
      >
        <FadeUpWhenVisible offset={200}>
          <div className='quote is-size-4'>
            {testimonial.frontmatter.testimonial}
          </div>
        </FadeUpWhenVisible>
        <FadeUpWhenVisible>
          <figure className='image is-128x128'>
            <LazyImage
              src={`https://foundrs.imgix.net/${testimonial.frontmatter.image}?w=256&h=256&fit=crop&auto=compress,format`}
              width={256}
              height={256}
              alt={`A photo of ${testimonial.frontmatter.name}`}
            />
          </figure>
          <p>
            <span>
              {testimonial.frontmatter.name} &mdash;<span>&nbsp;</span>
              {testimonial.frontmatter.title}<span>&nbsp;</span>
              {testimonial.frontmatter.company}
            </span>
          </p>
        </FadeUpWhenVisible>
        <style>{`
          .image {
            margin: auto;
            margin-bottom: 2rem;
            margin-top: 2rem;
            
            clip-path: circle(50%);
          }
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
      </article>
    )
  }
}
