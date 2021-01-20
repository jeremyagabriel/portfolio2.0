/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { motion, useAnimation } from "framer-motion";
import { navigate } from 'gatsby';

const MotionBox = motion.custom(Box);

export const UnderlineButton = ({
  text,
  to,
  buttonSx,
  textSx,
  underlineSx,
  lineColor = 'white',
  ...props
}) => {

  const controls = useAnimation();

  return (
    <MotionBox
      data-comp={UnderlineButton.displayName}
      sx={{ ...defaultButtonSx, ...buttonSx }}
      onClick={() => {
        to.startsWith('http')
          ? window.open(to, '_blank')
          : navigate(to)
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
        sx={{ position: 'relative', ...defaultUnderlineSx, ...underlineSx }}
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