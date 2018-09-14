import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible.js'
import Section from 'react-bulma-components/lib/components/section'
import Button from 'react-bulma-components/lib/components/button'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Heading from 'react-bulma-components/lib/components/heading'
import Card from 'react-bulma-components/lib/components/card'
import SiteFooter from '../components/SiteFooter'
import VisibleSplitText from '../components/VisibleSplitText'
import Chevrons from '../components/Chevrons'
import SectionTriangle from '../components/SectionTriangle'
import TestimonialGrid from '../components/TestimonialGrid'
import TriangularMotif from '../components/TriangularMotif'
import SponsorsGrid from '../components/SponsorsGrid'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import triangularLogo from '../img/foundrs-white-f-on-black.svg'
import TrackVisibility from 'react-on-screen'

class CommunitySection extends React.Component {
  render () {
    return (
      <Hero id='community' size='fullheight' color='black'>
        <Hero.Body className='has-text-centered is-fullwidth'>
          <Container className='has-text-centered is-fullwidth'>
            <FadeUpWhenVisible>
              <img src={triangularLogo} alt='Founders icon' width={128} height={128} />
            </FadeUpWhenVisible>
            <Heading size={1} className='has-text-centered is-fullwidth'>
              <VisibleSplitText text='A community of the world’s best founders' />
            </Heading>
            <Content style={{maxWidth: '40rem', margin: 'auto'}}>
              <p className='is-size-5'>Foundrs is an invite-only community of entrepreneurs who share in one simple idea:  by parking our egos, letting down our guard and helping each other through meaningful and honest conversation, we will build better businesses together.</p>
              <p className='is-size-5'>Businesses that aren't just better for our founders, our people and our customers, but better for the world we leave behind us.</p>
              <p>
                <Button
                  renderAs={Link}
                  to='/apply'
                  className='has-hover-weight is-large'
                  color='white'
                  outlined>Apply to join</Button>
              </p>
            </Content>

          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

export default class IndexPage extends React.Component {
  componentDidMount () {

  }

  render () {
    const { data } = this.props
    const { edges: testimonials } = data.allTestimonials
    const { edges: sponsors } = data.allSponsors
    console.log({sponsors})

    return (
      <Layout>
        <div style={{backgroundColor: '#080808'}}>

          <div id='intro'>
            <TrackVisibility once offset={100}>
              {({ isVisible }) => (
                <div style={{opacity: isVisible ? 1 : 0}}>
                  <CommunitySection isVisible={isVisible} testimonials={testimonials.slice(0, 2)} />
                </div>
              )
              }
            </TrackVisibility>
          </div>
          <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

          <Hero size='fullheight' color='white'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>
                <div style={{maxWidth: '10rem', margin: 'auto', marginTop: '-50vw', marginBottom: '8rem'}}>
                  <TriangularMotif stroke='#0a0a0a' weight='6' />
                </div>
                <Heading className='has-text-centered is-fullwidth has-text-weight-light'>
                  <VisibleSplitText text='Our Purpose' />
                </Heading>
                <Heading className='has-text-centered is-fullwidth'>
                  <VisibleSplitText text='We exist to enable Foundrs to give more, know more and be more' />
                </Heading>
                <TestimonialGrid fill='#0a0a0a' testimonials={testimonials.slice(2, 4)} />
              </Container>
            </Hero.Body>
          </Hero>

          <SectionTriangle background='#ffffff' foreground='#0a0a0a' />

          <Hero size='fullheight' color='black'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>
                <div style={{maxWidth: '10rem', margin: 'auto', marginTop: '-50vw', marginBottom: '8rem'}}>
                  <TriangularMotif stroke='#ffffff' weight='6' />
                </div>
                <Heading className='has-text-weight-light has-text-centered is-fullwidth'>
                  <VisibleSplitText text='Our Mission' />
                </Heading>
                <Heading className='has-text-centered is-fullwidth'>
                  <VisibleSplitText text='To establish an active Foundrs community in 100 major cities globally' />
                </Heading>
                <TestimonialGrid fill='#ffffff' testimonials={testimonials.slice(4, 6)} />
              </Container>
            </Hero.Body>
          </Hero>

          <SectionTriangle background='#0a0a0a' foreground='#ffffff' />

          <Hero size='fullheight' color='white'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>
                <div style={{maxWidth: '10rem', margin: 'auto', marginTop: '-50vw', marginBottom: '8rem'}}>
                  <TriangularMotif stroke='#0a0a0a' weight='6' />
                </div>
                <Heading className='has-text-centered is-fullwidth has-text-weight-light'>
                  <VisibleSplitText text='Our Vision' />
                </Heading>
                <Heading className='has-text-centered is-fullwidth'>
                  <VisibleSplitText text='The world’s best companies are run by the standards that our Foundrs set' />
                </Heading>
                <div style={{marginTop: '8rem', marginBottom: '8rem'}}>
                  <Heading className='has-text-centered is-fullwidth is-4'>
                    <VisibleSplitText text='Our sponsors' />
                  </Heading>
                  <SponsorsGrid sponsors={sponsors} />
                </div>
                <div style={{marginTop: '8rem', marginBottom: '8rem'}}>
                  <FadeUpWhenVisible>
                    <div style={{maxWidth: '30rem', margin: 'auto'}}>
                      <Card>
                        <Card.Content>
                          <Heading className='has-text-weight-light has-text-centered is-fullwidth'>
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
                </div>
              </Container>

            </Hero.Body>
          </Hero>

          {false && <Section size='large' className='has-text-centered' style={{position: 'relative'}} />}

          {false && <Section size='large' className='has-text-centered' style={{position: 'relative', marginTop: '-50vh'}}>
            <FadeUpWhenVisible>
              <div style={{maxWidth: '30rem', margin: 'auto', paddingTop: '50vh'}}>
                <Card>
                  <Card.Content>
                    <Heading className='has-text-weight-light has-text-centered is-fullwidth'>
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
          </Section>}
          <SiteFooter />
        </div>
      </Layout>
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
