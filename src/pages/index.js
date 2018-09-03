import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import AnimatedLogo from '../components/AnimatedLogo.js'
import Section from 'react-bulma-components/lib/components/section'
import Button from 'react-bulma-components/lib/components/button'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Plx from 'react-plx'
import SplitText from 'react-pose-text'
import TrackVisibility from 'react-on-screen'

const charPoses = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  delay: ({ charIndex }) => charIndex * 50
}

class SectionTriangle extends React.Component {
  render () {
    const {foreground, background} = this.props
    return (
      <div style={{backgroundColor: background, lineHeight: '0'}}>
        <svg style={{width: '100%', height: 'auto'}} viewBox='0 0 1 0.87'>
          <polygon points='0 0.87, 0.5 0, 0.5 0, 1 0.87' fill={foreground} />
        </svg>
      </div>
    )
  }
}

class VisibleSplitText extends React.Component {
  render () {
    const {text} = this.props
    return (
      <TrackVisibility>
        {({ isVisible }) => <SplitText
          visible={isVisible}
          initialPose='exit'
          pose={isVisible ? 'enter' : 'exit'}
          charPoses={charPoses}>
          {text}
        </SplitText>}
      </TrackVisibility>
    )
  }
}

class CommunitySection extends React.Component {
  render () {
    const parallaxData = [{
      start: 'self',
      end: 100,
      properties: [
        {
          startValue: 0,
          endValue: 90,
          property: 'rotate'
        }
      ]
    }]
    return (
      <Hero id='community' size='fullheight' color='black'>
        <Hero.Body className='has-text-centered is-fullwidth'>
          <Container className='has-text-centered is-fullwidth'>
            <Heading className='has-text-centered is-fullwidth'>
              <VisibleSplitText text='A community of the world’s best founders' />
            </Heading>
            <div className='is-fullwidth' style={{lineHeight: '0', marginTop: '-50vh'}}>
              <svg style={{margin: 'auto', width: '100%', height: 'auto'}} viewBox='0 0 1032 902'>
                <g transform='translate(16 16)'>
                  <polygon points='0 870, 500 0, 500 0, 1000 870' style={{stroke: 'ffffff', strokeWidth: 16}} fill='0a0a0a' />
                </g>
              </svg>
            </div>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div style={{perspective: '1px', transformStyle: 'preserve-3d'}}>
        <Hero size='fullheight'>
          <Hero.Body>
            <AnimatedLogo stroke='#0a0a0a' fill='none' weight='4' />
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#ffffff' foreground='#0a0a0a' />

        <CommunitySection />

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='We believe in parking our egos and letting down our guard' />
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#ffffff' foreground='#0a0a0a' />

        <Hero size='fullheight' color='black'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                We actively look for ways to help each other through open and honest conversation
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                Together, we can better manage the highs and lows of building a business
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                And be more fulfilled in the process
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <section className='section'>
          <div className='container'>

            {posts
              .map(({ node: post }) => (
                <div
                  className='content'
                  style={{ padding: '2em 4em' }}
                  key={post.id}
                >
                  <blockquote>
                    {post.frontmatter.testimonial}
                  </blockquote>
                  <p>
                    <span>
                      {post.frontmatter.name} &mdash;<span>&nbsp;</span>
                      {post.frontmatter.title}
                    </span>
                    <span>&nbsp;</span>
                    <Link className='has-text-primary' to={post.frontmatter.url}>
                      {post.frontmatter.company}
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
        <Section size='large' className='has-text-centered'>
          <AnimatedLogo stroke='#0a0a0a' fill='none' weight='4' />
          <Link to='/apply' className='has-text-centered'>
            <Button className='is-large' color='black'>
              Apply
            </Button>
          </Link>
        </Section>

        <svg className='clip-svg'>
          <defs>
            <clipPath id='equilateral-clip-path' clipPathUnits='objectBoundingBox'>
              <polygon points='0 0.87, 0.5 0, 0.5 0, 1 0.87' />
            </clipPath>
          </defs>
        </svg>

        <svg className='clip-svg'>
          <defs>
            <clipPath id='full-clip-path' clipPathUnits='objectBoundingBox'>
              <polygon points='0 1, 0.5 0, 0.5 0, 1 1' />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "testimonial" } }}
    ) {
      edges {
        node {         
          id
          
          frontmatter {
            templateKey
            name
            title
            company
            url
            testimonial            
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
