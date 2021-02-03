/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { FaBars } from 'react-icons/fa';
import { Flex } from '../Components';
import { UnderlineButton } from '../UnderlineButton';


export const Navbar = ({ onMenuClick, contactRef }) => {

  return (
      <Flex
        data-comp={Navbar.displayName}
        sx={{
          ...navbarSx,
          a: {
            color: 'white'
          }
        }}
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
            to={contactRef}
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
            onClick={onMenuClick}
          />
        </Flex>
      </Flex>
  )
}

const navbarSx = {
  justifyContent: 'space-between',
  alignItems: ['flex-start', null, 'center'],
  p: 3,
};

Navbar.displayName = 'Navbar';