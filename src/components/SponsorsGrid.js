import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible'
import LazyImage from './LazyImage'

export default class SponsorsGrid extends React.Component {
  render () {
    let {sponsors} = this.props
    sponsors = sponsors.map((s) => s.node)
    return (
      <div>
        <Columns>
          {sponsors.slice(0, 3).map((sponsor, index) => (
            <Columns.Column key={sponsor.id}>
              <FadeUpWhenVisible delay={index * 100}>
                <LazyImage className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
              </FadeUpWhenVisible>
            </Columns.Column>
          ))}
        </Columns>
        <Columns>
          {sponsors.slice(3, 6).map((sponsor, index) => (
            <Columns.Column key={sponsor.id}>
              <FadeUpWhenVisible delay={(2 + index) * 100}>
                <LazyImage className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
              </FadeUpWhenVisible>
            </Columns.Column>
          ))}
        </Columns>
        <Columns>
          {sponsors.slice(6, 9).map((sponsor, index) => (
            <Columns.Column key={sponsor.id}>
              <FadeUpWhenVisible delay={(4 + index) * 100}>
                <LazyImage className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
              </FadeUpWhenVisible>
            </Columns.Column>
          ))}
        </Columns>
        <style>{`
          .bw {
            -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(100%);
            margin: 1rem;
            max-height: 4rem;
          }
        `}</style>
      </div>
    )
  }
}
