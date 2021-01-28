/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { Flex, MotionBox, MotionText, Image } from '../Components';
import { CircleButton } from '../CircleButton';
import Avatar from '../../assets/images/jeremy-headshot.jpg';
import { aboutAtom } from '../../lib/atoms';


export const About = () => {

  const setAboutRef = useSetRecoilState(aboutAtom);
  const ref = useRef(null);

  useEffect(() => {
    setAboutRef(ref);
  }, [])

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [elementTop, elementTop + 20], [0, -1], {
    clamp: false
  });
  const y2 = useTransform(scrollY, [elementTop, elementTop + 10], [0, -1], {
    clamp: false
  });
  const y3 = useTransform(scrollY, [elementTop, elementTop + 5], [0, -1], {
    clamp: false
  });

  return (
    <Flex
      data-comp={About.displayName}
      ref={ref}
      id='about-section'
      sx={{
        flexDirection: ['column-reverse', null, null, 'row'],
        alignItems: 'center',
        justifyContent: 'center',
        mb: [8, 10, 20],
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          mr: [0, null, null, 12],
        }}
      >
        <MotionBox
          variants={itemVariant}
          animateOnLoad={true}
          sx={{ mb: [6] }}
        >
          <Flex sx={{ alignItems: 'center', mb: [1], pl: [1] }}>
            <Text
              variant='text.h4'
              sx={{
                color: 'primary',
                // fontWeight: 'regular',
                letterSpacing: '0.05em',
                mr: [3]
              }}
            >
              Hello World
            </Text>
            <Box sx={{ height: '2px', width: ['30px', '60px'], bg: 'primary' }}/>
          </Flex>
          <Text variant='text.h1'>About Me</Text>
        </MotionBox>

        <MotionText
          variants={itemVariant}
          animateOnLoad={true}
          sx={{ mb: [6] }}
        >
          Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream programming, I'm powered by the love of efficient code through the lens of enjoyable, intuitive design. Let's build some awesome things together, and maybe eat, cry, and celebrate along the way.
        </MotionText>

        <MotionBox
          variants={itemVariant}
          animateOnLoad={true}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            variant='text.h4'
            sx={{ mr: [2] }}
          >
            More About Me
          </Text>
          <CircleButton
            icon={HiOutlineArrowRight}
            side='left'
            circleSx={{
              width: '50px',
              height: '50px',
              borderColor: 'secondary',
            }}
            iconSx={{ color: 'secondary', fontSize: '24px' }}
          />
        </MotionBox>
      </Box>

      <Box
        sx={{
          position: 'relative',
          minWidth: '300px',
          minHeight: '300px',
          maxWidth: '300px',
          maxHeight: '300px',
          width: '300px',
          height: '300px',
          mb: [6, null, null, 0],
        }}
      >
        <motion.div
          sx={{
            width: 'inherit',
            height: 'inherit',
            borderRadius: '50%',
            bg: 'primary',
            background: 'linear-gradient(108deg, rgba(246,80,84,1) 24%, rgba(207,85,88,1) 100%)',
          }}
          style={{ y: y1 }}
        />
        {/* <motion.div sx={{ width: '100px', height: '100px', bg: 'green' }} style={{ y: y1, x: -50 }} />
        <motion.div
          sx={{ width: '100px', height: '100px', bg: 'green' }}
          style={{ y: y2, x: 50, background: 'salmon' }}
        /> */}

        <motion.div
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            top: 0,
            bottom: 0,
          }}
          style={{ y: y2 }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '100px',
              left: '-50px',
              width: '320px',
              height: '3px',
              bg: 'secondary',
              transform: 'rotate(-30deg)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '100px',
              left: '-20px',
              width: '340px',
              height: '3px',
              bg: 'secondary',
              transform: 'rotate(-30deg)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '140px',
              left: '-20px',
              width: '300px',
              height: '3px',
              bg: 'secondary',
              transform: 'rotate(-30deg)',
            }}
          />
        </motion.div>

        <motion.div
          sx={{
            position: 'absolute',
            top: '80px',
            left: '65px',
            width: '180px',
            height: '180px',
            bg: 'white',
          }}
          style={{ y: y3 }}
        />

        <Image
          src={Avatar}
          alt='Jeremy Gabriel Avatar'
          lazy={false}
          sx={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '180px',
            height: '180px',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Flex>
  );
}

const elementTop = 620;

const itemVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
};

About.displayName = 'AboutSection';