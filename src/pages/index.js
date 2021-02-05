/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { useMemo } from 'react';
import { graphql } from 'gatsby';
import { Main } from '../layouts';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Stacks } from '../components/Stacks';
import { SEO } from '../components/SEO';


const Home = ({ data }) => {

  const content = useMemo(() => ({
    projects: data?.projects?.content,
    about: data?.about?.content,
    stacks: data?.stacks?.content,
  }), []);

  return (
    <Main>
      <Container
        data-comp={Home.displayName}
        sx={containerSx}
      >
        <SEO />
        <About
          content={content.about}
        />
        <Projects
          content={content.projects}
        />
        <Stacks
          content={content.stacks}
        />
      </Container>
    </Main>
  )
}

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'white',
  pt: [4, null, null, 15],
  pb: [10, 15, 20],
};

Home.displayName = 'Home';

export default Home;

export const query = graphql`
  query {
    projects: contentfulSection(metaHandle: {eq: "projects-section"}) {
    content {
      ... on ContentfulHeading {
        heading
        subheading
      }
      ... on ContentfulSection {
        content {
          ... on ContentfulProject {
            id
            heading
            subheading
            body {
              body
            }
            repoUrl
            siteUrl
            image {
              fluid {
                srcWebp
              }
            }
            tags
            completionDate
          }
        }
      }
    }
  }
    about: contentfulSection(metaHandle: {eq: "about-section"}) {
      content {
        ... on ContentfulHeading {
          heading
          subheading
        }
        ... on ContentfulText {
          text {
            text
          }
        }
      }
    }
    stacks: contentfulSection(metaHandle: {eq: "stacks-section"}) {
      content {
        ... on ContentfulHeading {
          heading
          subheading
        }
      }
    }
  }
`