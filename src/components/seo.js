import React from 'react';
import { Title, Meta } from 'react-head';
import { useStaticQuery, graphql } from 'gatsby';


export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, url, image, author, keywords } = site.siteMetadata;

  return (
    <>
      <Title>{title}</Title>
      <Meta
        name='description'
        content={description}
      />
      <Meta
        name='author'
        content={author}
      />
      <Meta
        name='keywords'
        content={keywords}
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
      <Meta
        propety='og:image:width'
        content='1200'
      />
      <Meta
        propety='og:image:height'
        content='630'
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
        author
        keywords
      }
    }
  }
`;