import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Preview from '../../assets/images/linkpreview.jpg'

const SEO = () => {

  return (
    <Helmet
      title="Jeremy Gabriel's Portfolio"
      meta={[
        {
          property: `og:title`,
          content: "Front-End Engineer with a love for enjoyable and intuitive user experiences.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `https://jeremyagabriel.netlify.app/${Preview}`,
        },
      ]}
    />
  );
}

export default SEO;