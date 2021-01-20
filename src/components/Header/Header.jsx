/** @jsx jsx */
import { jsx, Text, Box, Flex } from 'theme-ui';
import { navigate } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Heading } from './Heading';
import { Buttons } from './Buttons';
import { CircleButton } from '../CircleButton';
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
          sx={{ color: 'white', mr: [2] }}
        >
          Jeremy Gabriel
        </Text>
        <Flex sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <UnderlineButton
            text='Contact Me'
            sx={{
              mr: [6, null, 0],
              display: ['none', null, 'block']
            }}
          />
          <FaBars
            sx={{
              display: ['block', null, 'none'],
              color: 'white',
              fontSize: '30px',
              cursor: 'pointer',
            }}
          />
        </Flex>
      </Box>

      <Box sx={contentSx}>
        <Buttons />
        <Heading />
      </Box>

      <Box sx={{display: ['block', null, 'none']}}>
        <CircleButton
          icon={HiOutlineArrowDown}
          side='top'
          circleSx={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            mx: 'auto',
            left: 0,
            right: 0,
            bottom: '20vh',
          }}
          iconSx={{ fontSize: '24px' }}
        />
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
  background: 'linear-gradient(145deg, rgba(246,80,84,1) 82%, rgba(255,69,73,1) 100%)',
};

const navbarSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: ['flex-start', null, 'center'],
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