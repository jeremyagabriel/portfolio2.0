/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jeremy Gabriel's Portfolio`
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto Condensed',
            weights: ['300', '400', '700']
          },
          {
            family: 'Poppins',
            weights: ['100', '300', '400', '500', '700', '900']
          },
          {
            family: 'Roboto',
            weights: ['100', '300', '400', '500', '700', '900']
          },
          {
            family: 'Barlow Condensed',
            weights: ['100', '300', '400', '500', '600', '700', '900']
          },
          {
            family: 'DM Serif Display',
            weights: ['400']
          },
        ],
        display: 'block',
      }
    }
  ],
}
