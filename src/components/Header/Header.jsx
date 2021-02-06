/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useAnimation } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Flex, FlexCol, MotionBox } from '../Components';
import { Menu } from '../Menu';
import { HeaderHeading } from './HeaderHeading';
import { Buttons } from './Buttons';
import { PlayButton } from './PlayButton';
import { Navbar } from './Navbar';
import { Splash } from '../Splash';
import { GameContainer } from '../Game';
import { contactAtom, aboutAtom, projectsAtom } from '../../lib/atoms';


export const Header = () => {

  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ gameOpen, setGameOpen ] = useState(false);
  const [ isResetting, setIsResetting ] = useState(false);
  const [ showSplash, setShowSplash ] = useState(true);

  const contactRef = useRecoilValue(contactAtom);
  const aboutRef = useRecoilValue(aboutAtom);
  const projectsRef = useRecoilValue(projectsAtom);

  const [ motionProps, setMotionProps ] = useState(initialSliderProps);
  const xCoord = useRef(null);

  const controls = useAnimation();

  const onMenuClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      controls.start('visible')
    } else {
      setMenuOpen(false);
      controls.start('hidden')
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000)
  }, [])

  return (
    <FlexCol
      data-comp={Header.displayName}
      sx={headerSx}
    >
      <Navbar
        onMenuClick={onMenuClick}
        contactRef={contactRef}
      />

      <Flex sx={contentSx}>
        <Buttons
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />
        <HeaderHeading />
      </Flex>

      <Flex
        sx={{
          justifyContent: 'center',
          display: ['flex', null, 'none']
        }}
      >
        <FaChevronDown sx={chevronSx} />
      </Flex>

      <Box sx={rightTriangle} />
      <Box sx={leftTriangle} />

      { !isResetting &&
        <MotionBox
          sx={sliderSx}
          {...motionProps}
          onDrag={(event, info) => {
            if (xCoord.current === null) xCoord.current = info.point.x
            if ((xCoord.current - info.point.x) >= 100) {
              setMotionProps({
                drag: false,
                initial: 'hidden',
                animate: 'visible',
                variants: {
                  hidden: { left: '150%', transition: { duration: 1.3 }},
                  visible: { left: 0, right: 0, transition: { duration: 1 } }
                },
              });
              setGameOpen(true);
            }
          }}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          dragMomentum={false}
        >
          <PlayButton />
        </MotionBox>
      }

      { gameOpen && !menuOpen &&
        <GameContainer
          onClose={() => {
            setGameOpen(false);
            setMotionProps({
              ...motionProps,
              animate: 'hidden',
            });
            setTimeout(() => {
              setMotionProps(initialSliderProps);
              setIsResetting(true);
            }, 1000);
            setTimeout(() => {
              setIsResetting(false);
            }, 1005);
          }}
        />
      }

      { menuOpen && !gameOpen &&
        <Menu
          menuOpen={menuOpen}
          closeMenu={() => setMenuOpen(false)}
          onMenuClick={onMenuClick}
          contactRef={contactRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />
      }

      { showSplash &&
        <Splash />
      }
    </FlexCol>
  )
}

const headerSx = {
  height: '100vh',
  minHeight: ['400px'],
  maxHeight: '800px',
  overflow: 'hidden',
  bg: 'primary',
  background: `linear-gradient(145deg,
    rgba(246,80,84,1) 82%,
    rgba(255,69,73,1) 100%)`,
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

const sliderSx = {
  position: 'absolute',
  top: 0,
  left: '100%',
  bottom: 0,
  width: '120%',
  height: '100%',
  bg: 'tertiary',
};

const initialSliderProps = {
  initial: false,
  drag: 'x',
  variants: {},
  animate: null,
};

const chevronSx = {
  position: 'absolute',
  bottom: ['15vh', '110px'],
  fontSize: '40px',
  color: 'tertiary',
};

Header.displayName = 'Header';