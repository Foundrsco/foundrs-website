module.exports = {
  siteMetadata: {
    title: 'Foundrs',
    siteUrl: `https://www.foundrs.co`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: './src/img/foundrs-icon.png',

    //     // WebApp Manifest Configuration
    //     appName: 'Foundrs',
    //     appDescription: `A community of the world's best founders`,
    //     developerName: 'Stef Lewandowski',
    //     developerURL: 'https://stef.io',
    //     dir: 'auto',
    //     lang: 'en-US',
    //     background: '#0a0a0a',
    //     theme_color: '#fff',
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/?homescreen=1',
    //     version: '1.0',

    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       opengraph: false,
    //       twitter: false,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // },
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
