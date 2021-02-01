/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';
import { Flex, FlexCol, MotionBox, MotionText } from '../Components';
import { CtaButton } from '../CtaButton';
import { Heading } from '../Heading';
import { ParallaxAvatar } from './ParallaxAvatar';
import { aboutAtom } from '../../lib/atoms';


export const About = () => {

  const setAboutRef = useSetRecoilState(aboutAtom);
  const ref = useRef(null);

  useEffect(() => {
    setAboutRef(ref);
  }, [])

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
        >
          Project Manager turned Software Developer, and I'm here to stay, baby. As I live and dream in programming, I'm powered by the love of efficient code through the lens of enjoyable, intuitive design. Let's build some awesome things together, and maybe eat, cry, and celebrate along the way.
        </MotionText>

        <CtaButton
          icon={HiOutlineArrowRight}
          ctaText='Read More'
          onClick={null}
          styles={{ alignSelf: 'flex-start' }}
        />
      </FlexCol>

      <ParallaxAvatar />
    </Flex>
  );
}

About.displayName = 'AboutSection';