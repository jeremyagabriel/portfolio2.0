/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useAnimation, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Flex, FlexCol, MotionBox, Motion } from '../Components';
import { Heading } from './Heading';
import { Buttons } from './Buttons';
import { PlayButton } from './PlayButton';
import { CircleButton } from '../CircleButton';
import { UnderlineButton } from '../UnderlineButton';
import { GameContainer } from '../Game';
import { contactAtom, aboutAtom, projectsAtom } from '../../lib/atoms';


export const Header = ({ ...props }) => {

  const [ menuOpen, setMenuOpen ] = useState(false);

  const contactRef = useRecoilValue(contactAtom);
  const aboutRef = useRecoilValue(aboutAtom);
  const projectsRef = useRecoilValue(projectsAtom);

  const [ drag, setDrag ] = useState('x');
  const [ MenuIcon, setMenuIcon ] = useState(FaBars)
  const [ variants, setVariants ] = useState(null);
  const [ motionProps, setMotionProps ] = useState({
    initial: false,
    drag: 'x',
    variants: {},
    animate: null,
  });
  const xCoord = useRef(null);

  const controls = useAnimation();

  const motionSx = {
    // display: 'none',
    position: 'absolute',
    top: 0,
    left: '100%',
    bottom: 0,
    // right: 0,
    width: '103%',
    height: '100%',
    // bg: '#53be54',
    bg: 'white',
  }

  return (
    <FlexCol
      data-comp={Header.displayName}
      sx={headerSx}
    >
      {/* <MotionBox
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { scale: 1, opacity: 0, transition: { duration: 1.5 } },
          visible: { scale: 50, opacity: [0, 1, 1, 1], transition: { duration: 1.5 } }
        }}
        sx={{
          bg: 'secondary',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          position: 'absolute',
          top: '40px',
          right: '40px'

        }}
      /> */}
      <Flex
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
              zIndex: 10,
            }}
            onClick={() => {
              if (!menuOpen) {
                setMenuOpen(true);
                controls.start('visible')
              } else {
                setMenuOpen(false);
                controls.start('hidden')
              }
            }}
          />
        </Flex>
      </Flex>

      <Flex sx={contentSx}>
        <Buttons
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />
        <Heading />
      </Flex>

      <Box sx={{display: ['block', null, 'none']}}>
        <CircleButton
          icon={HiOutlineArrowDown}
          to={aboutRef}
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

      {/* <AnimatePresence>
        <MotionBox
          key='menu-circle'
          initial='hidden'
          animate={controls}
          exit={{ opacity: 0 }}
          variants={{
            hidden: { scale: 1, opacity: [1, 1, 1, 0], transition: { duration: 1 } },
            visible: { scale: 100, opacity: [0.5, 1, 1, 1], transition: { duration: 1 } }
          }}
          sx={{
            display: ['block', null, 'none'],
            bg: 'secondary',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            position: 'absolute',
            top: '30px',
            right: '30px'

          }}
        />
      </AnimatePresence> */}
      <Box sx={rightTriangle} />
      <Box sx={leftTriangle} />
      {/* <MotionBox
        sx={motionSx}
        {...motionProps}
        onDrag={(event, info) => {
          if (xCoord.current === null) xCoord.current = info.point.x
          if ((xCoord.current - info.point.x) >= 100) {
            setMotionProps({
              drag: false,
              initial: 'hidden',
              animate: 'visible',
              variants: {
                // hidden: { left: '100%' },
                visible: { left: 0, right: 0, transition: { duration: 1 } }
              },
            })
          }
        }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4}
        dragMomentum={false}
      >
        <PlayButton />
        <GameContainer />
      </MotionBox> */}
    </FlexCol>
  )
}

const headerSx = {
  height: '100vh',
  minHeight: '400px',
  maxHeight: '800px',
  overflow: 'hidden',
  bg: 'primary',
  background: 'linear-gradient(145deg, rgba(246,80,84,1) 82%, rgba(255,69,73,1) 100%)',
};

const navbarSx = {
  justifyContent: 'space-between',
  alignItems: ['flex-start', null, 'center'],
  p: 3,
};

const contentSx = {
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
  borderBottom: '15vh solid white',
  zIndex: 2,
};

const leftTriangle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  height: 0,
  width: 0,
  borderLeft: '85vw solid transparent',
  borderBottom: '15vh solid white',
  zIndex: 2,
};

Header.displayName = 'Header';



// dragConstraints={{ right: 0, left: 0 }}