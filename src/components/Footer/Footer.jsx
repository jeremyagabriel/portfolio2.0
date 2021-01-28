/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Flex, FlexCol, MotionBox, Motion, Image } from '../Components';
import { useAnimation } from 'framer-motion';
import JeremyCartoon from '../../assets/images/jeremy-cartoon.png'
import { contactAtom } from '../../lib/atoms';


export const Footer = ({ ...props }) => {

  const controls = useAnimation();
  const setContactRef = useSetRecoilState(contactAtom);
  const ref = useRef(null);

  useEffect(() => {
    setContactRef(ref);
  }, [])

  return (
    <FlexCol
      ref={ref}
      data-comp={Footer.displayName}
      id='contact-section'
      sx={footerSx}
      {...props}
    >
      <Text
        variant='text.h2'
        sx={{
          ...textSx,
          'WebkitTextFillColor': 'transparent',
          'WebkitTextStrokeWidth': '1px',
          'WebkitTextStrokeColor': 'white',
        }}
      >
        LET'S BUILD TOGETHER
      </Text>
      {/* <MotionBox
        initial='hidden'
        animate={controls}
        variants={{
          hidden: {
            opacity: [1, 1, 1, 0],
            rotate: 0,
            scale: 1,
            transition
          },
          visible: {
            opacity: [1, 1, 1, 1],
            rotate: 400,
            scale: 1.4,
            transition
          }
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '10vw',
          width: ['30vw'],
          height: ['30vw'],
          bg: 'transparent',
          borderRadius: '50%',
        }}
      >
        <MotionBox
          sx={{
            position: 'absolute',
            left: -70,
            borderRadius: '50%',
            bg: 'white',
            width: '5vw',
            height: '5vw',
          }}
        />
      </MotionBox> */}
      <MotionBox
        initial='hidden'
        animate={controls}
        variants={circleVariant}
        onHoverStart={() => controls.start('visible')}
        onHoverEnd={() => controls.start('hidden')}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: '5vw',
          top: '-5vw',
          width: ['34vw'],
          height: ['34vw'],
          // bg: 'white',
          background: 'linear-gradient(108deg, rgba(246,80,84,1) 24%, rgba(207,85,88,1) 100%)',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
      {/* <Image
        src={JeremyCartoon}
        sx={{
          position: 'absolute',
          object: 'contain',
          width: '160px',
        }}
      /> */}
        <Text variant='text.h2' sx={{ color: 'white', textAlign: 'center', fontSize: '4vw' }}>
          HELLO WORLD
        </Text>
      </MotionBox>
    </FlexCol>
  )
}

const textSx = {
  color: 'white',
  fontSize: ['15vw'],
};

const footerSx = {
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100vh',
  p: [4],
  minHeight: '600px',
  maxHeight: '800px',
  // overflow: 'hidden',
  // bg: 'primary',
  bg: '#212169',
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

Footer.displayName = 'Footer';