import React from 'react';
import { Title, Meta } from 'react-head';
import { useStaticQuery, graphql } from 'gatsby';


export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, url, image } = site.siteMetadata;

  return (
    <>
      <Title>{title}</Title>
      <Meta
        name='description'
        content={description}
      />
      <Meta
        name='image'
        content={image}
      />
      <Meta
        property='og:url'
        content={url}
      />
      <Meta
        propety='og:title'
        content={title}
      />
      <Meta
        propety='og:description'
        content={description}
      />
      <Meta
        propety='og:image'
        content={url + image}
      />
    </>
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