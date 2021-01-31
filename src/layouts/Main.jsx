/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { RecoilRoot } from 'recoil';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


export const Main = ({ children }) => {
  return (
    <RecoilRoot>
      <Container
        data-comp={Main.displayName}
        display='flex'
        flexDirection='column'
        height='100vh'
        overflow='hidden'
      >
        <Header />

        <Box flex={1}>
          { children }
        </Box>

        <Footer />
      </Container>
    </RecoilRoot>
  )
}

Main.displayName = 'Layout';