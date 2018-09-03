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
import Box from 'react-bulma-components/lib/components/box'
import Card from 'react-bulma-components/lib/components/card'
import Plx from 'react-plx'
import SplitText from 'react-pose-text'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import SiteFooter from '../components/SiteFooter'
import VisibleSplitText from '../components/VisibleSplitText'
import TestimonialItem from '../components/TestimonialItem'
import Columns from 'react-bulma-components/lib/components/columns'
import Chevrons from '../components/Chevrons'

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
    const {testimonials} = this.props
    return (
      <Hero id='community' size='fullheight' color='black'>
        <Hero.Body className='has-text-centered is-fullwidth'>
          <Container className='has-text-centered is-fullwidth'>
            <Heading className='has-text-centered is-fullwidth'>
              <VisibleSplitText text='A community of the world’s best founders' />
            </Heading>
            <Content style={{maxWidth: '40rem', margin: 'auto'}}>
              <p className='is-4'>Foundrs is an invite-only community of entrepreneurs who share in one simple idea:  by parking our egos, letting down our guard and helping each other through meaningful and honest conversation, we will build better businesses together.</p>
              <p className='is-4'>Businesses that aren't just better for our founders, our people and our customers, but better for the world we leave behind us.</p>
            </Content>
            <div style={{marginTop: '4rem'}}>
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
          </Container>
        </Hero.Body>
      </Hero>

    )
  }
}

export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props
    const { edges: testimonials } = data.allMarkdownRemark

    return (
      <div style={{perspective: '1px', transformStyle: 'preserve-3d'}}>
        <div style={{position: 'relative'}}>
          <Hero size='fullheight'>
            <Hero.Body>
              <AnimatedLogo stroke='#0a0a0a' fill='none' weight='4' />
            </Hero.Body>
          </Hero>
          <Chevrons weight={4}
            id='intro'
            foreground='#0a0a0a'
            background='#ffffff'
            width={typeof (window) === 'undefined' ? 1000 : window.innerWidth}
            height={typeof (window) === 'undefined' ? 1000 : window.innerHeight * 3.5}
            style={{zIndex: -1, width: '100%', height: '350vh', position: 'absolute', top: 0, left: 0}} />
        </div>

        <SectionTriangle background='transparent' foreground='#0a0a0a' />

        <CommunitySection testimonials={testimonials.slice(0, 2)} />

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Our Purpose' />
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
                <VisibleSplitText text='Our Mission' />
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
                <VisibleSplitText text='Our Vision' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='The world’s best companies are run by the standards that our Foundrs set' />
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>

        <Section size='large' className='has-text-centered' style={{position: 'relative'}}>
          <FadeUpWhenVisible>
            <div style={{maxWidth: '30rem', margin: 'auto'}}>
              <Card>
                <Card.Content>
                  <Heading className='has-text-centered is-fullwidth'>
                    <VisibleSplitText text='Would you like to join?' />
                  </Heading>
                  <div className='has-text-centered'>
                    <Button renderAs={Link} to='/apply' className='is-large' color='black'>
                      How to apply
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </div>
          </FadeUpWhenVisible>
          <Chevrons weight={4}
            id='intro'
            foreground='#0a0a0a'
            background='#ffffff'
            width={typeof (window) === 'undefined' ? 1000 : window.innerWidth}
            height={typeof (window) === 'undefined' ? 1000 : window.innerHeight}
            style={{zIndex: -1, width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, right: 0}} />
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
            image
            testimonial            
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
