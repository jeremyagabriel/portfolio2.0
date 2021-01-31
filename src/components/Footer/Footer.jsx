/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { useRef, useEffect, useState, } from 'react';
import { useSetRecoilState } from 'recoil';
import { Flex, FlexCol, MotionBox, MotionText, Motion, Image } from '../Components';
import { useAnimation } from 'framer-motion';
import JeremyCartoon from '../../assets/images/jeremy-cartoon.png'
import { contactAtom } from '../../lib/atoms';
import { UnderlineButton } from '../UnderlineButton';


export const Footer = ({ ...props }) => {

  const controls = useAnimation();
  const setContactRef = useSetRecoilState(contactAtom);
  const ref = useRef(null);
  const [mouseClick, setMouseClick] = useState({ x: -5, y: -5 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setContactRef(ref);
  }, [])

  const onMouseClick = (e) => {
    if (isAnimating) return;
    navigator.clipboard.writeText('jeremyagabriel.dev@gmail.com')
    setIsAnimating(true);
    setMouseClick({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
    controls.start('visible');
    setTimeout(() => {
      setIsAnimating(false);
      controls.start('hidden');
    }, 1000)
  };

  return (
    <FlexCol
      ref={ref}
      data-comp={Footer.displayName}
      id='contact'
      sx={footerSx}
      {...props}
    >
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: 'rgb(0,0,0)',
            transform: 'scale(2000)',
            transition: {
              duration: 1.5,
              delay: 0,
            }
          }
        }}
        sx={{
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          // bg: 'secondary',
          position: 'absolute',
          top: mouseClick.y,
          left: mouseClick.x,
          cursor: 'pointer',
          background: 'rgb(0,0,0)',
          // background: 'radial-gradient(circle, rgba(33,33,105,1) 0%, rgba(33,105,102,0) 50%)',
        }}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: 'rgb(255,255,255)',
            transform: 'scale(2000)',
            transition: {
              duration: 1.5,
              delay: 0.1,
            }
          }
        }}
        sx={{
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          // bg: 'secondary',
          position: 'absolute',
          top: mouseClick.y,
          left: mouseClick.x,
          cursor: 'pointer',
          background: 'rgb(255,255,255)',
          // background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(33,105,102,0) 50%)',
        }}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: 'rgb(0,0,0)',
            transform: 'scale(2000)',
            transition: {
              duration: 1.5,
              delay: 0.2,
            }
          }
        }}
        sx={{
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          // bg: 'secondary',
          position: 'absolute',
          top: mouseClick.y,
          left: mouseClick.x,
          cursor: 'pointer',
          background: 'rgb(0,0,0)',
          // background: 'radial-gradient(circle, rgba(33,33,105,1) 0%, rgba(33,105,102,0) 50%)',
        }}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: '#F65054',
            transform: 'scale(2000)',
            transition: {
              duration: 1.5,
              delay: 0.3,
            }
          }
        }}
        sx={{
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          // bg: 'secondary',
          position: 'absolute',
          top: mouseClick.y,
          left: mouseClick.x,
          cursor: 'pointer',
          background: '#F65054',
          // background: 'radial-gradient(circle, rgba(33,33,105,1) 0%, rgba(33,105,102,0) 50%)',
        }}
      />

      <FlexCol
        sx={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          pl: [5]
        }}
      >
        <MotionText
          animateOnLoad={true}
          variants='default'
          variant='text.h2'
          sx={{
            ...textSx,
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1px',
            'WebkitTextStrokeColor': 'white',
          }}
        >
          LET'S BUILD
        </MotionText>
        <MotionText
          animateOnLoad={true}
          variants='default'
          variant='text.h2'
          sx={{
            ...textSx,
            mb: [3]
          }}
        >
          TOGETHER
        </MotionText>
        <MotionBox
          animateOnLoad={true}
          variants='default'
        >
          <UnderlineButton
            text='jeremyagabriel.dev@gmail.com'
            sx={{
            }}
          />
        </MotionBox>
      </FlexCol>
      <Box
        onClick={onMouseClick}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          cursor: 'pointer',
        }}
      />
    </FlexCol>
  )
}

const textSx = {
  color: 'white',
  // fontSize: ['15vw'],
  fontSize: ['70px', '90px', null, '110px', '130px'],
};

const footerSx = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  // height: '100vh',
  height: ['322px', '414px', null , '506px', '600px'],
  overflow: 'hidden',
  bg: 'primary',
  // bg: '#212169',
  // background: 'linear-gradient(145deg, rgba(246,80,84,1) 82%, rgba(255,69,73,1) 100%)',
};

const item = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
};

const transition = { duration: 0.7 };

const circleVariant = {
  hidden: {
    // rotate: 0,
    scale: 1,
    transition
  },
  visible: {
    // rotate: 180,
    scale: 1.1,
    transition
  }
};

const x = 10;
const y = 10;

const triangle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: 0,
  width: 0,
  borderLeft: '100vw solid transparent',
  borderTop: '15vh solid white',
  zIndex: 2,
};

Footer.displayName = 'Footer';