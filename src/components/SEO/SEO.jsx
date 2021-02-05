import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, url, image } = site.siteMetadata;

  return (
    <Helmet
      title={title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${url}${image}`,
        },
      ]}
    />
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
  }
`;