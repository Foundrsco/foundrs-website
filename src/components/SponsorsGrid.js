import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
import FadeUpWhenVisible from '../components/FadeUpWhenVisible'

export default class SponsorsGrid extends React.Component {
  render () {
    let {sponsors} = this.props
    sponsors = sponsors.map((s) => s.node)
    return (
      <div>
        <Columns>
          {sponsors.slice(0, 3).map((sponsor) => (
            <Columns.Column key={sponsor.id}>
              <FadeUpWhenVisible>
                <img className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
              </FadeUpWhenVisible>
            </Columns.Column>
          ))}
        </Columns>
        <Columns>
          {sponsors.slice(3, 6).map((sponsor) => (
            <Columns.Column key={sponsor.id}>
              <FadeUpWhenVisible>
                <img className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
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
