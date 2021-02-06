import React from 'react';
// import { Title, Meta } from 'react-head';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, url, image, author, keywords } = site.siteMetadata;

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'author',
          content: author
        },
        {
          name: 'keywords',
          content: keywords
        },
        {
          property: 'og:image',
          content: url + image
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: description
        }
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
        author
        keywords
      }
    }
  }
`;