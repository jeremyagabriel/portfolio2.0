/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React, { useRef, useState, useEffect } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { useAnimation } from 'framer-motion';
import { Flex, FlexCol, MotionBox, MotionText } from '../Components';
import { CtaButton } from '../CtaButton';
import { Heading } from '../Heading';
import { ParallaxAvatar } from './ParallaxAvatar';
import { aboutAtom } from '../../lib/atoms';


export const About = () => {

  const [ moreAbout, setMoreAbout ] = useState(false);
  const setAboutRef = useSetRecoilState(aboutAtom);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    setAboutRef(ref);
  }, [])

  return (
    <>
    <MotionBox
      initial='visible'
      animate={controls}
      variants={{
        visible: {
          x: 0,
        },
        hidden: {
          // x: '150%',
          x: 0,
          transition: {
            duration: 1.5,
          }
        }
      }}
    >
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
          px: [1, 2, 3]
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
            threshold={0.25}
          >
            {aboutText}
          </MotionText>

          {/* <CtaButton
            icon={HiOutlineArrowRight}
            ctaText='Read More'
            onClick={() => {
              controls.start('hidden');
              setTimeout(() => {
                setMoreAbout(true);
              }, 1500)
            }}
            styles={{ alignSelf: 'flex-start' }}
          /> */}
        </FlexCol>

        <ParallaxAvatar />
      </Flex>
    </MotionBox>
    </>
  );
}

const aboutText = `Project manager turned software developer, powered by the love of building efficient code through the lens of a design background. While embracing latest technologies and practices to keep sites modern and performant, I also focus on creating enjoyable and intuitive user experiences.`;

About.displayName = 'AboutSection';