/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { motion, useAnimation } from "framer-motion";
import { navigate } from 'gatsby';

export const UnderlineButton = ({
  text,
  to,
  buttonSx,
  textSx,
  underlineSx,
  ...props
}) => {

  const controls = useAnimation();

  return (
    <motion.div
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
      <motion.div
        sx={{ position: 'relative', ...defaultUnderlineSx, ...underlineSx }}
        initial='hidden'
        animate={controls}
        variants={motionVariant}
      >
        <Box sx={{ ...motionLineSx, left: 0 }}/>
        <Box sx={{ ...motionLineSx, bg: 'transparent', left: '-100%' }}/>
        <Box sx={{ ...motionLineSx, left: '-200%' }}/>
    </motion.div>
    </motion.div>
  );
}

const defaultButtonSx = {
  display: 'flex',
  flexDirection: 'column',
  mr: 6,
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
  bg: 'white',
};

const motionVariant = {
  hidden: { x: '0%', transition: { duration: 0.5 } },
  visible: { x: '200%', transition: { duration: 0.5 } }
};

UnderlineButton.displayName = 'UnderlineButton';