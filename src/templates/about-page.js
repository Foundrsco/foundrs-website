import React from 'react'
import PropTypes from 'prop-types'
import ContentDisplay, { HTMLContent } from '../components/Content'
import Content from 'react-bulma-components/lib/components/content'
import Container from 'react-bulma-components/lib/components/container'
import Section from 'react-bulma-components/lib/components/section'
import Heading from 'react-bulma-components/lib/components/heading'
import Hero from 'react-bulma-components/lib/components/hero'
import PageTransition from 'gatsby-plugin-page-transitions'
import triangle from '../img/foundrs-black-triangle.svg'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || ContentDisplay

  return (

    <PageTransition
      defaultStyle={{
        transition: 'opacity 200ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        opacity: 0,
        position: 'absolute',
        width: '100%'
      }}
      transitionStyles={{
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 }
      }}
      transitionTime={200}
    >
      <Section>
        <Container>
          <Content>
            <Hero size='large'>
              <Hero.Body className='has-text-centered is-fullwidth'>
                <Heading className='has-text-centered is-fullwidth'>{title}</Heading>
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
    </PageTransition>
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
