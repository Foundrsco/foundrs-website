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
import SectionTriangle from '../components/SectionTriangle'
import TestimonialGrid from '../components/TestimonialGrid'

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
            <TestimonialGrid testimonials={testimonials} />
          </Container>
        </Hero.Body>
      </Hero>

    )
  }
}

const Fader = posed.div({
  starting: {
    transition: { duration: 500 },
    opacity: 0.1
  },
  scrolling: {
    transition: { duration: 500 },
    opacity: 1
  }
})

class FadeInOnStart extends React.Component {
  render () {
    const {children} = this.props
    return (
      <TrackVisibility offset={-100}>
        {({ isVisible }) => <Fader pose={isVisible ? 'scrolling' : 'starting'}>{children}</Fader>}
      </TrackVisibility>
    )
  }
}

export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props
    const { edges: testimonials } = data.allTestimonials
    const { edges: sponsors } = data.allSponsors
    console.log({sponsors})

    return (
      <div style={{perspective: '1px', transformStyle: 'preserve-3d'}}>
        <div style={{position: 'relative'}}>
          <Hero size='fullheight'>
            <Hero.Body>
              <AnimatedLogo stroke='#0a0a0a' fill='none' weight='4' />
            </Hero.Body>
          </Hero>
          <FadeInOnStart>
            <Chevrons weight={4}
              id='intro'
              foreground='#0a0a0a'
              background='#ffffff'
              width={typeof (window) === 'undefined' ? 1000 : window.innerWidth}
              height={typeof (window) === 'undefined' ? 1000 : window.innerHeight * 3.5}
              style={{zIndex: -1, width: '100%', height: '350vh', position: 'absolute', top: 0, left: 0}} />
          </FadeInOnStart>
        </div>

        <SectionTriangle background='transparent' foreground='#0a0a0a' />

        <CommunitySection testimonials={testimonials.slice(0, 2)} />

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <div style={{maxWidth: '10rem', margin: 'auto', marginBottom: '8rem'}}>
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-50vw'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#0a0a0a'
                  weight='6' />
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-6rem'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#0a0a0a'
                  weight='6' />
              </div>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Our Purpose' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='We exist to enable Foundrs to give more, know more and be more' />
              </Heading>
              <TestimonialGrid testimonials={testimonials.slice(2, 4)} />
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#ffffff' foreground='#0a0a0a' />

        <Hero size='fullheight' color='black'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <div style={{maxWidth: '10rem', margin: 'auto', marginBottom: '8rem'}}>
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-50vw'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#ffffff'
                  weight='6' />
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-6rem'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#ffffff'
                  weight='6' />
              </div>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Our Mission' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='To establish an active Foundrs community in 100 major cities globally' />
              </Heading>
              <TestimonialGrid testimonials={testimonials.slice(4, 6)} />
            </Container>
          </Hero.Body>
        </Hero>

        <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

        <Hero size='fullheight' color='white'>
          <Hero.Body className='has-text-centered is-fullwidth'>
            <Container className='has-text-centered'>
              <div style={{maxWidth: '10rem', margin: 'auto', marginBottom: '8rem'}}>
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-50vw'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#0a0a0a'
                  weight='6' />
                <SectionTriangle
                  style={{margin: 'auto', marginTop: '-6rem'}}
                  foreground='transparent'
                  background='transparent'
                  stroke='#0a0a0a'
                  weight='6' />
              </div>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='Our Vision' />
              </Heading>
              <Heading className='has-text-centered is-fullwidth'>
                <VisibleSplitText text='The world’s best companies are run by the standards that our Foundrs set' />
              </Heading>
              <div style={{marginTop: '8rem'}}>
                <Heading className='has-text-centered is-fullwidth is-4'>
                  <VisibleSplitText text='With sponsorship from' />
                </Heading>
                {false && sponsors && <Columns>
                  <Columns.Column>
                    {sponsors.split(0, 3).map((sponsor) => (
                      <Columns.Column>
                        <div>With sponsorship from</div>
                      </Columns.Column>
                    ))}
                  </Columns.Column>
                  <Columns.Column>
                    {sponsors.split(3, 6).map((sponsor) => (
                      <Columns.Column>
                        <div>With sponsorship from</div>
                      </Columns.Column>
                    ))}
                  </Columns.Column>
                </Columns>}
              </div>
            </Container>
          </Hero.Body>
        </Hero>

        <Section size='large' className='has-text-centered' style={{position: 'relative', marginTop: '-50vh'}}>
          <SectionTriangle background='transparent' foreground='#0a0a0a' />
          <FadeUpWhenVisible>
            <div style={{maxWidth: '30rem', margin: 'auto', marginTop: '-50vh'}}>
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
          <Chevrons
            rotation={180}
            weight={4}
            id='intro'
            foreground='#0a0a0a'
            background='#ffffff'
            width={typeof (window) === 'undefined' ? 1000 : window.innerWidth}
            height={typeof (window) === 'undefined' ? 1000 : window.innerHeight * 1.5}
            style={{zIndex: -1, width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0, right: 0}} />
        </Section>
        <SiteFooter />
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allTestimonials: PropTypes.shape({
      edges: PropTypes.array
    }),
    allSponsors: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allTestimonials: allMarkdownRemark(
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
    allSponsors: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "sponsor" } }}
    ) {
      edges {
        node {         
          id
          
          frontmatter {
            templateKey
            name
            image
          }
        }
      }
    }
  }
`
