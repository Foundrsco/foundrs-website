import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <section class='bd-index-fullscreen hero is-fullheight'>
          <div class='hero-head'>
            <div class='container' />
          </div>

          <div class='hero-body'>
            <div class='container'>
              <header class='bd-index-header has-text-centered'>
                <figure className='image is-centered'>
                  <img className='is-centered' src={logo} alt='Foundrs' style={{ width: '50%', margin: 'auto' }} />
                </figure>

                <h4 class='subtitle is-4'>
                  A global movement to create communities of the world's best founders
                </h4>
              </header>
            </div>
          </div>

          <div class='hero-foot'>
            <div class='container'>
              <div class='tabs is-centered' />
            </div>
          </div>
        </section>

        <section class='bd-index-fullscreen hero is-fullheight is-light'>
          <div class='hero-head'>
            <div class='container' />
          </div>

          <div class='hero-body'>
            <div class='container'>
              <header class='bd-index-header has-text-centered'>
                <h4 class='subtitle is-4'>
                  <strong>Foundrs is an invite-only community of like minded entrepreneurs</strong>
                </h4>
                <h4 class='subtitle is-4'>
                  We share one simple belief –
                </h4>
                <h4 class='subtitle is-4'>
                  By parking our egos, letting down our guard and actively looking for ways to help each other through open and honest conversation,
                </h4>
                <h4 class='subtitle is-4'>
                  <strong>Together, we can better manage the highs and lows of building a business</strong> and be more fulfilled in the process.
                </h4>

              </header>
            </div>
          </div>

          <div class='hero-foot'>
            <div class='container'>
              <div class='tabs is-centered' />
            </div>
          </div>
        </section>

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
