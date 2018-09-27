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

export const JoinPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || ContentDisplay
  let formHeight = 800
  if (typeof (window) !== 'undefined') {
    formHeight = window.innerHeight - 80
  }
  return (
    <div>
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

      <div style={{maxWidth: '40rem', padding: '2rem', margin: 'auto', marginBottom: '4rem', border: '2px solid #ddd' }}>
        <iframe
          title='join-foundrs-form'
          class='airtable-embed'
          src='https://airtable.com/embed/shr8vC92ceFTAATb5?backgroundColor=orange'
          frameBorder='0'
          width='100%'
          height={formHeight}
          style={{background: 'transparent', border: '1px solid #ccc;'}} />
      </div>
    </div>
  )
}

JoinPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const JoinPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <JoinPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

JoinPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default JoinPage

export const joinPageQuery = graphql`
  query JoinPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
