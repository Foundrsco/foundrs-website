import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash.kebabCase'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import { graphql } from 'gatsby'

export const TestimonialTemplate = ({
  content,
  contentComponent,
  testimonial,
  name,
  company,
  title,
  url,
  image,
  helmet
}) => {
  const TestimonialContent = contentComponent || Content

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content' />
    </section>
  )
}

TestimonialTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  name: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
}

const Testimonial = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TestimonialTemplate
      content={post.html}
      contentComponent={HTMLContent}
      testimonial={post.frontmatter.testimonial}
      helmet={<Helmet title={`${post.frontmatter.name} | Anon`} />}
      name={post.frontmatter.name}
      company={post.frontmatter.company}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      url={post.frontmatter.url}
    />
  )
}

Testimonial.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Testimonial

export const pageQuery = graphql`
  query TestimonialByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        company
        title
        url
        image
        testimonial
      }
    }
  }
`
