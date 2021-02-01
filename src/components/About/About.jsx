/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { Flex, FlexCol, MotionBox, MotionText, Image } from '../Components';
import { CircleButton } from '../CircleButton';
import { Line } from '../Animations';
import { Heading } from '../Heading';
import Avatar from '../../assets/images/jeremy-headshot.jpg';
import JeremyCartoon from '../../assets/images/jeremy-cartoon.png';
import Halftone from '../../assets/images/halftone.png';
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
  const y4 = useTransform(scrollY, [elementTop, elementTop + 15], [0, -1], {
    clamp: false
  });

  return (
    <Flex
      data-comp={About.displayName}
      ref={ref}
      id='about'
      sx={{
        flexDirection: ['column-reverse', null, null, 'row'],
        alignItems: 'center',
        justifyContent: 'center',
        mb: [8, 10, 20],
        pt: [8, 10, null, 4],
      }}
    >
      <FlexCol
        sx={{
          maxWidth: '600px',
          mr: [0, null, null, 12],
        }}
      >
        <Heading
          heading='About Me'
          subheading='Hello World'
          styles={{ mb: [3, null, null, 6], alignSelf: 'flex-start' }}
        />

        <MotionText
          variants='default'
          animateOnLoad={true}
          sx={{ mb: [3, null, null, 6] }}
        >
          Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream in programming, I'm powered by the love of efficient code through the lens of enjoyable, intuitive design. Let's build some awesome things together, and maybe eat, cry, and celebrate along the way.
        </MotionText>

        <MotionBox
          variants='default'
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
            Read More
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
      </FlexCol>

      <Box
        sx={{
          position: 'relative',
          minWidth: '240px',
          minHeight: '240px',
          maxWidth: '240px',
          maxHeight: '240px',
          width: '240px',
          height: '240px',
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
        <motion.div
          sx={{
            position: 'absolute',
            top: '40px',
            width: '160px',
            right: '-20px',
          }}
          style={{ y: y3 }}
        >
          <Image
            src={Halftone}
            sx={{
              width: '100%',
              objectFit: 'contain',
              height: 'auto',
              filter: 'invert(1)'
            }}
          />
        </motion.div>

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
          <Line />
          <Line
            x='105%'
            styles={{
              top: '108px',
              left: '-20px',
              width: '300px',
            }}
          />
          <Line
            styles={{
              top: '140px',
              left: '-20px',
              width: '280px',
            }}
          />
        </motion.div>

        {/* <motion.div
          sx={{
            position: 'absolute',
            top: '80px',
            left: '65px',
            width: '180px',
            height: '180px',
            bg: 'white',
          }}
          style={{ y: y3 }}
        /> */}

        {/* <Image
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
        /> */}
        <motion.div
          sx={{
            position: 'absolute',
            top: '-60px',
            left: '70px',
          }}
          style={{ y: y4 }}
        >
          <Image
            src={JeremyCartoon}
            alt='Jeremy Gabriel Avatar'
            lazy={false}
            sx={{
              height: ['320px', null, null, '380px'],
              objectFit: 'contain',
              userSelect: 'none',
            }}
          />
        </motion.div>
      </Box>
    </Flex>
  );
}

const elementTop = 620;

About.displayName = 'AboutSection';