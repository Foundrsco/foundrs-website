import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import AnimatedLogo from '../components/AnimatedLogo.js'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible.js'
import Section from 'react-bulma-components/lib/components/section'
import Button from 'react-bulma-components/lib/components/button'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Heading from 'react-bulma-components/lib/components/heading'
import Plx from 'react-plx'
import SplitText from 'react-pose-text'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import SiteFooter from '../components/SiteFooter'

const charPoses = {
  enter: {
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 5
  },
  exit: {
    opacity: 0,
    delay: ({ charIndex }) => charIndex * 2
  }
}

class SectionTriangle extends React.Component {
  render () {
    const {foreground, background} = this.props
    return (
      <div style={{backgroundColor: background, lineHeight: '0'}}>
        <svg overflow='visible' width='100' height='87' style={{width: '100%', height: 'auto'}} viewBox='0 0 100 87'>
          <polygon points='0 87, 50 0, 50 0, 100 87' stroke={foreground} fill={foreground} />
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
            <Content style={{maxWidth: '40rem', margin: 'auto'}}>
              <p>Foundrs is an invite-only community of entrepreneurs who share in one simple idea:  by parking our egos, letting down our guard and helping each other through meaningful and honest conversation, we will build better businesses together.</p>

              <p>Businesses that aren't just better for our founders, our people and our customers, but better for the world we leave behind us.</p>
            </Content>
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
                <VisibleSplitText text='Purpose' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='We exist to enable Foundrs to give more, know more and be more' />
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#ffffff' foreground='#0a0a0a' />

        <Hero size='fullheight' color='black'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Mission' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='To establish an active Foundrs community in 100 major cities globally' />
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Vision' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='The world’s best companies are run by the standards that our Foundrs set' />
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
          <FadeUpWhenVisible>
            <Heading className='has-text-centered is-fullwidth'>
              <VisibleSplitText text='Would you like to join?' />
            </Heading>
            <Link to='/apply' className='has-text-centered'>
              <Button className='is-large' color='black'>
                How to apply
              </Button>
            </Link>
          </FadeUpWhenVisible>
        </Section>
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
