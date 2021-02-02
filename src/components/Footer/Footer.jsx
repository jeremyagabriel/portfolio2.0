/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { useRef, useEffect, useState, } from 'react';
import { useSetRecoilState } from 'recoil';
import { FlexCol, MotionText } from '../Components';
import { ClickRipple } from '../Animations';
import { useAnimation } from 'framer-motion';
import { contactAtom } from '../../lib/atoms';
import { Heading } from './Heading';


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
    }, 2000)
  };

  return (
    <FlexCol
      ref={ref}
      data-comp={Footer.displayName}
      id='contact'
      sx={footerSx}
      {...props}
    >
      <ClickRipple
        controls={controls}
        mouseClick={mouseClick}
      />

      <Heading />

      <Text
        variant='text.h2'
        sx={{
          fontSize: [5, 6],
          position: 'absolute',
          bottom: [3, 4, 5],
          left: [3, 5],
          userSelect: 'none',
          color: 'primary'
        }}
      >
        Copied!
      </Text>

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

      <MotionText
        variant='text.h4'
        variants='default'
        animateOnLoad={true}
        sx={{
          fontSize: [2, 4],
          color: 'white',
          p: [2],
          bg: 'secondary',
          position: 'absolute',
          top: '-10px',
          left: [3, 5],
        }}
      >
        Click Below To Copy Email
      </MotionText>
    </FlexCol>
  )
}

const footerSx = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: ['350px', '440px', null , '506px', '600px'],
  bg: 'primary',
};

Footer.displayName = 'Footer';