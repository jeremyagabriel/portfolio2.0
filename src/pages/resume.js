/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import { useMemo } from 'react';
import { Main } from '../layouts';


const Resume = () => {

  return (
    <Main>
      <Container
        data-comp={Resume.displayName}
        sx={containerSx}
      >

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
  px: [1, 2, 3],
  py: [8, 10, 15],
};

Resume.displayName = 'Resume';

export default Resume;