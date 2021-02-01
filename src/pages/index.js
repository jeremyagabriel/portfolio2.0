/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import { useMemo } from 'react';
import { graphql } from 'gatsby';
import { Main } from '../layouts';
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Stacks } from '../components/Stacks'


const Home = ({ data }) => {

  const content = useMemo(() => ({
    projects: data?.contentfulSection?.content
  }), []);

  return (
    <Main>
      <Container
        data-comp={Home.displayName}
        sx={containerSx}
      >
        <About />
        <Projects
          projects={content.projects}
        />
        <Stacks />
      </Container>
    </Main>
  )
}

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // minHeight: '1000px',
  bg: 'white',
  // px: [1, 2, 3],
  pt: [4, null, null, 15],
  pb: [8, 10, 15],
};

Home.displayName = 'Home';

export default Home;

export const query = graphql`
  query ProjectsQuery {
  contentfulSection(metaHandle: {eq: "projects-section"}) {
    content {
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
`