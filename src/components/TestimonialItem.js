import React from 'react'
// import quoteStart from '../img/quote-marks-start.svg'
// import quoteEnd from '../img/quote-marks-end.svg'
import LazyImage from './LazyImage'
import QuoteMark from './QuoteMark'
import posed from 'react-pose'

const Falling = posed.div({
  rise: {
    y: 0,
    transition: { duration: 500 },
    opacity: 1,
    scale: 1,
    ease: 'circOut'
  },
  fall: {
    y: '24px',
    transition: { duration: 500 },
    opacity: 0,
    scale: 1,
    ease: 'circIn'
  }
})

export default class TestimonialItem extends React.Component {
  render () {
    const {testimonial, fill, pose} = this.props

    return (
      <article
        style={{maxWidth: '24rem', margin: 'auto'}}
      >
        <Falling pose={pose}>
          <div className='quote is-size-5'>
            <QuoteMark fill={fill} mode='start' style={{width: '1.5rem', margin: 'auto', marginRight: '1rem'}} />
            {testimonial.frontmatter.testimonial}
            <QuoteMark fill={fill} mode='end' style={{width: '1.5rem', margin: 'auto', marginLeft: '1rem'}} />
          </div>
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
        </Falling>
        <style>{`
          .image {
            margin: auto;
            margin-bottom: 2rem;
            margin-top: 2rem;
            
            clip-path: circle(50%);
          }
          
        `}</style>
      </article>
    )
  }
}
