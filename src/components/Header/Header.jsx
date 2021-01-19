/** @jsx jsx */
import { jsx, Text, Box, Flex } from 'theme-ui';
import { navigate } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { Heading } from './Heading';
import { Buttons } from './Buttons';
import { UnderlineButton } from '../UnderlineButton';

export const Header = ({ ...props }) => {

  return (
    <Box
      data-comp={Header.displayName}
      sx={headerSx}
    >
      <Box
        sx={{
          ...navbarSx,
          a: {
            color: 'white'
          }
        }}
        {...props}
      >
        <Text
          variant='text.h2'
          sx={{ color: 'white' }}
        >
          Jeremy Gabriel
        </Text>
        <Flex sx={{ alignItems: 'center' }}>
          <UnderlineButton text='Contact Me' />
          <FaBars
            sx={{ color: 'white', fontSize: '30px'}}
          />
        </Flex>
      </Box>

      <Box sx={contentSx}>
        <Buttons />
        <Heading />
      </Box>

      <Box sx={rightTriangle} />
      <Box sx={leftTriangle} />
    </Box>
  )
}

const headerSx = {
  height: '100vh',
  minHeight: '400px',
  maxHeight: '800px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  bg: 'primary',
  background: 'linear-gradient(145deg, rgba(252,87,67,1) 48%, rgba(207,68,51,1) 100%)',
};

const navbarSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  p: 3,
};

const contentSx = {
  display: 'flex',
  flexDirection: 'row',
  ml: [4],
  mb: [6],
  flex: 1,
  alignItems: 'center',
};

const rightTriangle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 0,
  width: 0,
  borderRight: '15vw solid transparent',
  borderBottom: '15vh solid white'
};

const leftTriangle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  height: 0,
  width: 0,
  borderLeft: '85vw solid transparent',
  borderBottom: '15vh solid white'
};

Header.displayName = 'Header';