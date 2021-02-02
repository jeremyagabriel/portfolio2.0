/** @jsx jsx */
import { jsx  } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { MotionBox, MotionText } from '../Components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


export const Menu = ({
  menuOpen,
  closeMenu,
  onMenuClick,
  contactRef,
  aboutRef,
  projectsRef,
  ...props
}) => {

  const menuRef = useRef(null);

  const links = [
    {
      label: 'Contact',
      to: contactRef,
    },
    {
      label: 'About',
      to: aboutRef,
    },
    {
      label: 'Work',
      to: projectsRef,
    },
    {
      label: 'GitHub',
      to: 'https://github.com/jeremyagabriel',
    },
    {
      label: 'LinkedIn',
      to: 'https://www.linkedin.com/in/jeremyagabriel',
    },
  ];

  useEffect(() => {
    menuRef.current = document.querySelector('#menu');
    menuOpen && disableBodyScroll(menuRef.current);
    return () => clearAllBodyScrollLocks();
  }, [menuOpen])

  return (
    <MotionBox
      data-comp={Menu.displayName}
      id='menu'
      sx={menuSx}
      animate={menuOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          y: '100%',
          transition: {
            duration: 0.5
          }
        },
        visible: {
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.5
          }
        }
      }}
      {...props}
    >
      { links.map((link, index) => (
        <MotionText
          variants='default'
          delay={0.2}
          animateOnLoad={true}
          key={index}
          variant='text.h2'
          sx={{
            color: 'white',
            mb: index === links.length - 1 ? 0 : 7,
            cursor: 'pointer',
          }}
          onClick={() => {
            if (!link.to) return;
            closeMenu();
            clearAllBodyScrollLocks();
            typeof link.to === 'object'
              ? link.to.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              : window.open(link.to, '_blank')
          }}
        >
          {link.label}
        </MotionText>
      ))}
      <FaTimes
        sx={{
          display: ['block', null, 'none'],
          color: 'white',
          fontSize: '30px',
          cursor: 'pointer',
          position: 'absolute',
          top: [3],
          right: [3],
        }}
        onClick={onMenuClick}
      />
    </MotionBox>
  );
}

const menuSx = {
  display: ['flex', null, 'none'],
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100vh',
  width: '100vw',
  bg: 'secondary',
  pb: '15vh',
  pt: [8],
};

Menu.displayName = 'Menu';