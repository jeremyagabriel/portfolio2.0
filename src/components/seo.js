import React from 'react';
// import { Title, Meta } from 'react-head';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


export const SEO = () => {
  const { site } = useStaticQuery(query)
  const { title, description, url, image, author, keywords } = site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
      <meta
        name='author'
        content={author}
      />
      <meta
        name='keywords'
        content={keywords}
      />
      <meta
        name='image'
        content={image}
      />
      <meta
        property='og:url'
        content={url}
      />
      <meta
        propety='og:title'
        content={title}
      />
      <meta
        propety='og:description'
        content={description}
      />
      <meta
        propety='og:image'
        content={url + image}
      />
    </Helmet>
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

{/* <Title>{title}</Title>
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
/> */}