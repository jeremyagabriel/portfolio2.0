/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import { Main } from '../layouts';
import { About } from '../components/About'

const Home = ({ data }) => {

  return (
    <Main>
      <Container
        data-comp={Home.displayName}
        sx={containerSx}
      >
        <About />
      </Container>
    </Main>
  )
}

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '1000px',
  bg: 'white',
  px: [1, 2, 3],
  py: [6, 7, 8],
};

Home.displayName = 'Home';

export default Home;