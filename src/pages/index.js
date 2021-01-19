/** @jsx jsx */
import { jsx, Text, Box, Container } from 'theme-ui';
import { Main } from '../layouts';

const Home = ({ data }) => {

  return (
    <Main>
      <Container
        data-comp={Home.displayName}
        sx={containerSx}
      >

      </Container>
    </Main>
  )
}

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '1000px',
  bg: 'white',
};

Home.displayName = 'Home';

export default Home;