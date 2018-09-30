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
              <strong>{testimonial.frontmatter.name}</strong> &mdash;<span>&nbsp;</span>
              {testimonial.frontmatter.title}<span>&nbsp;</span>
              <a style={{textDecoration: 'underline'}}
                href={testimonial.frontmatter.url}>{testimonial.frontmatter.company}</a>
            </span>
          </p>

          <figure className='bw' style={{width: '128px'}}>
            <LazyImage
              src={`https://foundrs.imgix.net/${testimonial.frontmatter.logo}?w=256&auto=compress,format`}
              width={256}
              style={{width: '100%', height: 'auto'}}
              alt={`${testimonial.frontmatter.company} logo`}
            />
          </figure>
        </Falling>
        <style>{`
          .image {
            margin: auto;
            margin-bottom: 2rem;
            margin-top: 2rem;
            overflow: hidden;
            border-radius: 64px;
          }

          .bw {
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
            margin: 1rem;
            max-height: 4rem;
          }
          
        `}</style>
      </article>
    )
  }
}
