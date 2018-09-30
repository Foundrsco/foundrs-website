import React from 'react'
import Columns from 'react-bulma-components/lib/components/columns'
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
              <LazyImage className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
            </Columns.Column>
          ))}
        </Columns>
        <Columns>
          {sponsors.slice(3, 6).map((sponsor, index) => (
            <Columns.Column key={sponsor.id}>
              <LazyImage delay={(2 + index) * 100} className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
            </Columns.Column>
          ))}
        </Columns>
        <Columns>
          {sponsors.slice(6, 9).map((sponsor, index) => (
            <Columns.Column key={sponsor.id}>
              <LazyImage delay={(4 + index) * 100} className='bw' src={`/img/sponsors/${sponsor.frontmatter.image}`} alt={`${sponsor.frontmatter.name} logo`} />
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

          @media only screen and (max-width: 800px) {
            .bw { 
              max-width: 80vw;
            }
          }
        `}</style>
      </div>
    )
  }
}
