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
import VisibleSplitText from '../components/VisibleSplitText'
import Chevrons from '../components/Chevrons'
// import SectionTriangle from '../components/SectionTriangle'
import TestimonialGrid from '../components/TestimonialGrid'
// import TriangularMotif from '../components/TriangularMotif'
import SponsorsGrid from '../components/SponsorsGrid'
// import Layout from '../components/layout'
import { graphql } from 'gatsby'
import triangularLogo from '../img/foundrs-white-f-on-black.svg'
import TrackVisibility from 'react-on-screen'
import TriangleGradient from '../img/triangle-gradient.svg'
import ThreeScene from '../components/ThreeScene'
import NoSSR from 'react-no-ssr'

const isClientOrServer = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server'
}

class CommunitySection extends React.Component {
  render () {
    return (
      <div style={{background: '#080808', overflow: 'hidden', position: 'relative', width: '100%', height: '100vh'}}>
        <div style={{zIndex: 1, position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100vh'}}>
          <Hero id='community' size='fullheight' color='black' style={{backgroundColor: 'transparent'}}>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered is-fullwidth'>
                <FadeUpWhenVisible partialVisibility delay={500} y={10}>
                  <img src={triangularLogo} alt='Founders icon' width={128} height={128} data-pin-nopin='true' />
                </FadeUpWhenVisible>
                <Heading size={1} className='has-text-centered is-fullwidth'>
                  <VisibleSplitText text='A community of the world’s best founders' />
                </Heading>
                <Content style={{maxWidth: '30rem', margin: 'auto'}}>
                  <FadeUpWhenVisible partialVisibility delay={1000} y={10}>
                    <p className='is-size-5'>Foundrs is an invite-only community of entrepreneurs who share in one simple idea:</p>
                    <p className='is-size-5'>By parking our egos, letting down our guard and helping each other through meaningful and honest conversation, we will build better businesses together.</p>
                  </FadeUpWhenVisible>
                  <FadeUpWhenVisible partialVisibility delay={1500} y={10}>
                    <Button
                      renderAs={Link}
                      to='/apply'
                      className='has-hover-weight is-large'
                      color='white'
                      outlined
                      style={{marginTop: '3rem'}}>Apply to join</Button>
                  </FadeUpWhenVisible>
                </Content>
              </Container>

            </Hero.Body>

          </Hero>
        </div>
        <NoSSR>
          <div style={{zIndex: 0, position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100vh'}}>
            <ThreeScene backgroundColor={0x0a0a0a} opacity={0.5} />
          </div>
        </NoSSR>
      </div>
    )
  }
}

export default class IndexPage extends React.Component {
  state = {
    loaded: false
  }
  componentDidMount () {
    this.setState({loaded: true})
  }

  render () {
    const { data } = this.props
    const { loaded } = this.state
    const { edges: testimonials } = data.allTestimonials
    const { edges: sponsors } = data.allSponsors
    console.log({sponsors})

    return (
      <div style={{backgroundColor: '#080808'}}>
        <div id='intro'>
          <div style={{textAlign: 'center', opacity: ((loaded && (isClientOrServer() === 'client'))) ? 1 : 0}}>
            <CommunitySection />
          </div>
        </div>

        <div style={{backgroundColor: 'white'}}>
          <Hero size='fullheight' color='white'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>
                <TestimonialGrid fill='#0a0a0a' testimonials={testimonials} />
              </Container>
            </Hero.Body>
          </Hero>
          <Section size='medium' style={{backgroundImage: `url(${TriangleGradient})`, backgroundRepeat: 'repeat-x', backgroundSize: 'auto 100%'}} />

          <Hero size='large' color='black'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>
                <Heading className='has-text-centered is-fullwidth' size={1}>
                  <VisibleSplitText text={'Build a better business'} />
                </Heading>
                <div style={{maxWidth: '30em', margin: 'auto'}}>
                  <FadeUpWhenVisible delay={1000} y={0}>
                    <Heading className='has-text-centered is-fullwidth' size={4}>
                      That isn't just better for you, your people and your customers, but better for the world we all leave behind us.
                    </Heading>
                  </FadeUpWhenVisible>
                </div>
                <FadeUpWhenVisible delay={1500} y={10}>
                  <Button
                    renderAs={Link}
                    to='/apply'
                    className='has-hover-weight is-large'
                    color='white'
                    outlined
                    style={{marginTop: '3rem'}}>Apply to join</Button>
                </FadeUpWhenVisible>
              </Container>
            </Hero.Body>
          </Hero>

          <Section size='medium' style={{transform: 'rotate(180deg)', backgroundImage: `url(${TriangleGradient})`, backgroundRepeat: 'repeat-x', backgroundSize: 'auto 100%'}} />

          <Hero size='fullheight' color='white'>
            <Hero.Body className='has-text-centered is-fullwidth'>
              <Container className='has-text-centered'>

                <div style={{marginTop: '8rem', marginBottom: '8rem'}}>
                  <Heading className='has-text-centered is-fullwidth is-4'>
                    <VisibleSplitText text='Our sponsors' />
                  </Heading>
                  <SponsorsGrid sponsors={sponsors} />
                </div>
                <div style={{marginTop: '8rem', marginBottom: '8rem'}}>
                  <FadeUpWhenVisible>
                    <div style={{maxWidth: '30rem', margin: 'auto'}}>

                      <div className='has-text-centered'>
                        <Button renderAs={Link} to='/apply' className='is-large' color='black'>
                          Apply to join
                        </Button>
                      </div>

                    </div>
                  </FadeUpWhenVisible>
                </div>
              </Container>

            </Hero.Body>
          </Hero>
        </div>

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
