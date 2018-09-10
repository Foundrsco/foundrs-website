import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash.kebabcase'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'

export const SponsorTemplate = ({
  content,
  contentComponent,
  name,
  image,
  helmet
}) => {
  const SponsorContent = contentComponent || Content

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content' />
    </section>
  )
}

SponsorTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
}

const Sponsor = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <SponsorTemplate
      content={post.html}
      contentComponent={HTMLContent}
      testimonial={post.frontmatter.testimonial}
      helmet={<Helmet title={`${post.frontmatter.name} | Anon`} />}
      name={post.frontmatter.name}
      image={post.frontmatter.image}
    />
  )
}

Sponsor.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Sponsor

export const pageQuery = graphql`
  query SponsorByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        image
      }
    }
  }
`
