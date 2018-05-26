module.exports = {
  siteMetadata: {
    title: 'Jon Higgins - Melbourne-based front-end developer',
    titleHTML:
      'Jon Higgins <span>&#x2011; Melbourne-based front&#x2011;end developer</span>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-next',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
  pathPrefix: `/jon-higgins-2018`,
}
