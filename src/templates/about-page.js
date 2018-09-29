import React from 'react'
import PropTypes from 'prop-types'
import ContentDisplay, { HTMLContent } from '../components/Content'
import Content from 'react-bulma-components/lib/components/content'
import Container from 'react-bulma-components/lib/components/container'
import Section from 'react-bulma-components/lib/components/section'
import Heading from 'react-bulma-components/lib/components/heading'
import Hero from 'react-bulma-components/lib/components/hero'
// import PageTransition from 'gatsby-plugin-page-transitions'
import triangle from '../img/foundrs-black-triangle.svg'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible'
import { graphql } from 'gatsby'
import VisibleSplitText from '../components/VisibleSplitText'
import ThreeScene from '../components/ThreeScene'
import NoSSR from 'react-no-ssr'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || ContentDisplay

  return (
    <div>
      <NoSSR>
        <div style={{zIndex: -1, position: 'absolute', top: '0px', left: '0px', bottom: '0px', right: '0px'}}>
          <FadeUpWhenVisible partialVisibility delay={1000} y={0} offset={-200}>
            <ThreeScene wireframe color={0xe0e0e0} backgroundColor={0xffffff} />
          </FadeUpWhenVisible>
        </div>
      </NoSSR>
      <Section>
        <Container>
          <Content>
            <Hero size='large'>
              <Hero.Body className='has-text-centered is-fullwidth'>
                <FadeUpWhenVisible>
                  <Heading className='has-text-centered is-fullwidth' size={1}>
                    <VisibleSplitText text={title} />
                  </Heading>
                </FadeUpWhenVisible>
              </Hero.Body>

            </Hero>

            <div>
              <div>
                <img alt='Title' src={triangle} style={{height: '3.25rem'}} />
              </div>
              <div style={{maxWidth: '40em', margin: 'auto'}}>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </Content>
        </Container>
      </Section>
      <Section />
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
