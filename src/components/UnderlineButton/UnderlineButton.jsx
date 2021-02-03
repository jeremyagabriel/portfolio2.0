/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { MotionBox } from '../Components';
import { useInView } from 'react-intersection-observer';


export const UnderlineButton = ({
  text,
  to = null,
  onClick,
  buttonSx,
  textSx,
  underlineSx,
  lineColor = 'white',
  ...props
}) => {

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView])

  return (
    <MotionBox
      data-comp={UnderlineButton.displayName}
      ref={ref}
      sx={{ ...defaultButtonSx, ...buttonSx }}
      onClick={() => {
        if (onClick) {
          onClick();
          return;
        }
        if (!to) return;
        typeof to === 'object'
          ? to.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          : window.open(to, '_blank')
      }}
      onHoverStart={() => controls.start('visible')}
      onHoverEnd={() => controls.start('hidden')}
      {...props}
    >
      <Text
        variant='text.h4'
        sx={{ ...defaultTextSx, ...textSx }}
      >
        { text }
      </Text>
      <MotionBox
        sx={{
          position: 'relative',
          ...defaultUnderlineSx,
          ...underlineSx
        }}
        initial='hidden'
        animate={controls}
        variants={motionVariant}
      >
        <Box sx={{ ...motionLineSx, bg: lineColor, left: 0 }}/>
        <Box sx={{ ...motionLineSx, bg: 'transparent', left: '-100%' }}/>
        <Box sx={{ ...motionLineSx, bg: lineColor, left: '-200%' }}/>
      </MotionBox>
    </MotionBox>
  );
}

const defaultButtonSx = {
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  overflow: 'hidden',
};

const defaultTextSx = {
  color: 'white',
  mb: '4px',
  whiteSpace: 'nowrap',
};

const defaultUnderlineSx = {
  height: '3px',
  width: '100%',
};

const motionLineSx = {
  position: 'absolute',
  height: '100%',
  width: '100%',
};

const motionVariant = {
  hidden: { x: '0%', transition: { duration: 0.5 } },
  visible: { x: '200%', transition: { duration: 0.5 } }
};

UnderlineButton.displayName = 'UnderlineButton';