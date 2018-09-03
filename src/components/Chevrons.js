import React from 'react'

export default class Chevrons extends React.Component {
  render () {
    const {foreground, background, id, weight, width, height} = this.props
    let {rotation, style} = this.props
    rotation = rotation || 0
    style = style || {}
    style['transform'] = `rotate(${rotation})`
    return (
      <svg width={width} height={height} overflow='visible' style={style}
        viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <style jsx>{`
            .cls-1,.cls-3{fill:none;}
            .cls-2{clip-path:url(#${`chevron-${id}-clip-path`});}
            .cls-3{stroke:#000;}
            .cls-3,.cls-4{stroke-miterlimit:10;}
            `}
          </style>
          <clipPath id={`chevron-${id}-clip-path`}><rect class='cls-1' width='1000' height='870' /></clipPath>
          <pattern id={`chevron-${id}-a`} width='1000' height='870' patternTransform={`translate(${-(1000 - width) / 2})`} patternUnits='userSpaceOnUse' viewBox='0 0 1000 870'><rect class='cls-1' width='1000' height='870' /><g class='cls-2'><polyline class='cls-3' points='0 1740 500 870 1000 1740' /><polyline class='cls-3' points='0 1720.23 500 850.23 1000 1720.23' /><polyline class='cls-3' points='0 1700.46 500 830.45 1000 1700.46' /><polyline class='cls-3' points='0 1680.68 500 810.68 1000 1680.68' /><polyline class='cls-3' points='0 1660.91 500 790.91 1000 1660.91' /><polyline class='cls-3' points='0 1641.14 500 771.14 1000 1641.14' /><polyline class='cls-3' points='0 1621.37 500 751.36 1000 1621.37' /><polyline class='cls-3' points='0 1601.59 500 731.59 1000 1601.59' /><polyline class='cls-3' points='0 1581.82 500 711.82 1000 1581.82' /><polyline class='cls-3' points='0 1562.05 500 692.04 1000 1562.05' /><polyline class='cls-3' points='0 1542.27 500 672.27 1000 1542.27' /><polyline class='cls-3' points='0 1522.5 500 652.5 1000 1522.5' /><polyline class='cls-3' points='0 1502.73 500 632.73 1000 1502.73' /><polyline class='cls-3' points='0 1482.96 500 612.95 1000 1482.96' /><polyline class='cls-3' points='0 1463.18 500 593.18 1000 1463.18' /><polyline class='cls-3' points='0 1443.41 500 573.41 1000 1443.41' /><polyline class='cls-3' points='0 1423.64 500 553.64 1000 1423.64' /><polyline class='cls-3' points='0 1403.87 500 533.86 1000 1403.87' /><polyline class='cls-3' points='0 1384.09 500 514.09 1000 1384.09' /><polyline class='cls-3' points='0 1364.32 500 494.32 1000 1364.32' /><polyline class='cls-3' points='0 1344.55 500 474.55 1000 1344.55' /><polyline class='cls-3' points='0 1324.77 500 454.77 1000 1324.77' /><polyline class='cls-3' points='0 1305 500 435 1000 1305' /><polyline class='cls-3' points='0 1285.23 500 415.23 1000 1285.23' /><polyline class='cls-3' points='0 1265.46 500 395.45 1000 1265.46' /><polyline class='cls-3' points='0 1245.68 500 375.68 1000 1245.68' /><polyline class='cls-3' points='0 1225.91 500 355.91 1000 1225.91' /><polyline class='cls-3' points='0 1206.14 500 336.14 1000 1206.14' /><polyline class='cls-3' points='0 1186.37 500 316.36 1000 1186.37' /><polyline class='cls-3' points='0 1166.59 500 296.59 1000 1166.59' /><polyline class='cls-3' points='0 1146.82 500 276.82 1000 1146.82' /><polyline class='cls-3' points='0 1127.05 500 257.05 1000 1127.05' /><polyline class='cls-3' points='0 1107.27 500 237.27 1000 1107.27' /><polyline class='cls-3' points='0 1087.5 500 217.5 1000 1087.5' /><polyline class='cls-3' points='0 1067.73 500 197.73 1000 1067.73' /><polyline class='cls-3' points='0 1047.96 500 177.95 1000 1047.96' /><polyline class='cls-3' points='0 1028.18 500 158.18 1000 1028.18' /><polyline class='cls-3' points='0 1008.41 500 138.41 1000 1008.41' /><polyline class='cls-3' points='0 988.64 500 118.64 1000 988.64' /><polyline class='cls-3' points='0 968.87 500 98.86 1000 968.87' /><polyline class='cls-3' points='0 949.09 500 79.09 1000 949.09' /><polyline class='cls-3' points='0 929.32 500 59.32 1000 929.32' /><polyline class='cls-3' points='0 909.55 500 39.54 1000 909.55' /><polyline class='cls-3' points='0 889.77 500 19.77 1000 889.77' /><polyline class='cls-3' points='0 870 500 0 1000 870' /><polyline class='cls-3' points='0 850.23 500 -19.77 1000 850.23' /><polyline class='cls-3' points='0 830.46 500 -39.55 1000 830.46' /><polyline class='cls-3' points='0 810.68 500 -59.32 1000 810.68' /><polyline class='cls-3' points='0 790.91 500 -79.09 1000 790.91' /><polyline class='cls-3' points='0 771.14 500 -98.86 1000 771.14' /><polyline class='cls-3' points='0 751.36 500 -118.64 1000 751.36' /><polyline class='cls-3' points='0 731.59 500 -138.41 1000 731.59' /><polyline class='cls-3' points='0 711.82 500 -158.18 1000 711.82' /><polyline class='cls-3' points='0 692.05 500 -177.96 1000 692.05' /><polyline class='cls-3' points='0 672.27 500 -197.73 1000 672.27' /><polyline class='cls-3' points='0 652.5 500 -217.5 1000 652.5' /><polyline class='cls-3' points='0 632.73 500 -237.27 1000 632.73' /><polyline class='cls-3' points='0 612.96 500 -257.05 1000 612.96' /><polyline class='cls-3' points='0 593.18 500 -276.82 1000 593.18' /><polyline class='cls-3' points='0 573.41 500 -296.59 1000 573.41' /><polyline class='cls-3' points='0 553.64 500 -316.37 1000 553.64' /><polyline class='cls-3' points='0 533.86 500 -336.14 1000 533.86' /><polyline class='cls-3' points='0 514.09 500 -355.91 1000 514.09' /><polyline class='cls-3' points='0 494.32 500 -375.68 1000 494.32' /><polyline class='cls-3' points='0 474.55 500 -395.46 1000 474.55' /><polyline class='cls-3' points='0 454.77 500 -415.23 1000 454.77' /><polyline class='cls-3' points='0 435 500 -435 1000 435' /><polyline class='cls-3' points='0 415.23 500 -454.77 1000 415.23' /><polyline class='cls-3' points='0 395.45 500 -474.55 1000 395.45' /><polyline class='cls-3' points='0 375.68 500 -494.32 1000 375.68' /><polyline class='cls-3' points='0 355.91 500 -514.09 1000 355.91' /><polyline class='cls-3' points='0 336.14 500 -533.87 1000 336.14' /><polyline class='cls-3' points='0 316.36 500 -553.64 1000 316.36' /><polyline class='cls-3' points='0 296.59 500 -573.41 1000 296.59' /><polyline class='cls-3' points='0 276.82 500 -593.18 1000 276.82' /><polyline class='cls-3' points='0 257.05 500 -612.96 1000 257.05' /><polyline class='cls-3' points='0 237.27 500 -632.73 1000 237.27' /><polyline class='cls-3' points='0 217.5 500 -652.5 1000 217.5' /><polyline class='cls-3' points='0 197.73 500 -672.27 1000 197.73' /><polyline class='cls-3' points='0 177.96 500 -692.05 1000 177.96' /><polyline class='cls-3' points='0 158.18 500 -711.82 1000 158.18' /><polyline class='cls-3' points='0 138.41 500 -731.59 1000 138.41' /><polyline class='cls-3' points='0 118.64 500 -751.37 1000 118.64' /><polyline class='cls-3' points='0 98.86 500 -771.14 1000 98.86' /><polyline class='cls-3' points='0 79.09 500 -790.91 1000 79.09' /><polyline class='cls-3' points='0 59.32 500 -810.68 1000 59.32' /><polyline class='cls-3' points='0 39.55 500 -830.46 1000 39.55' /><polyline class='cls-3' points='0 19.77 500 -850.23 1000 19.77' /><polyline class='cls-3' points='0 0 500 -870 1000 0' /></g></pattern>
        </defs>

        <rect fill={`url(#chevron-${id}-a)`} width='100%' height='100%' />
      </svg>
    )
  }
}
