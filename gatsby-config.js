require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `Jeremy Gabriel's Portfolio`,
    description: `Front-End Engineer with a love for building efficient code and intuitive user experiences.`,
    url: `https://www.jeremyagabriel.com`,
    image: `/images/linkpreview_v2.jpg`,
    author: `Jeremy Gabriel`,
    keywords: `React, Javascript, Portfolio, Developer, Engineer, Frontend, Web, Software`
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            weights: ['100', '300', '400', '500', '700', '900']
          },
          {
            family: 'Barlow Condensed',
            weights: ['100', '300', '400', '500', '600', '700', '900']
          },
        ],
        display: 'block',
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -20,
        duration: 1500,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: spaceId,
        accessToken: accessToken,
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-react-helmet`
  ],
}
