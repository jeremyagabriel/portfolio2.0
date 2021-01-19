/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Main = ({ children }) => {
  return (
    <Container
      data-comp={Main.displayName}
      display='flex'
      flexDirection='column'
      height='100vh'
    >
      <Header />

      <Box flex={1}>
        { children }
      </Box>

      <Footer />
    </Container>
  )
}

Main.displayName = 'Layout';