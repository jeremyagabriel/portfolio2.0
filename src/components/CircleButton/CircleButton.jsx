/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { navigate } from 'gatsby';

export const CircleButton = ({
  text,
  icon,
  to,
  circleSx,
  textSx,
  iconSx,
  ...props
}) => {

  const [ color, setColor ] = useState('white');
  const Icon = icon;
  const controls = useAnimation();

  return (
    <motion.div
      data-comp={CircleButton.displayName}
      sx={{
        ...initialCircleSx,
        ...circleSx,
      }}
      onClick={() => {
        to.startsWith('http')
          ? window.open(to, '_blank')
          : navigate(to)
      }}
      onHoverStart={() => {
        controls.start('visible');
        setTimeout(() => setColor('black'), 50);
      }}
      onHoverEnd={() => {
        controls.start('hidden');
        setTimeout(() => setColor('white'), 50);
      }}
      {...props}
    >
      <motion.div
        sx={{
          width: '100%',
          height: '100%',
          bg: 'white',
        }}
        initial='hidden'
        animate={controls}
        variants={motionVariant}
      />
      { text
        ? <Text
            variant='text.h5'
            sx={{ color, ...initialTextSx, ...textSx }}
          >
            { text }
          </Text>
        : icon
            ? <Icon
                sx={{ color, ...initialIconSx, ...iconSx }}
              />
            : null
      }
    </motion.div>
  );
}

const initialCircleSx = {
  display: 'flex',
  position: 'relative',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '1px solid white',
  width: ['80px'],
  height: ['80px'],
  overflow: 'hidden',
  bg: 'transparent',
};

const initialTextSx = {
  position: 'absolute',
};

const initialIconSx = {
  position: 'absolute',
  fontSize: '40px',
};

const motionVariant = {
  hidden: { y: '101%', transition: { ease: "easeIn", duration: 0.15 } },
  visible: { y: '0%', transition: { ease: "easeIn", duration: 0.15 } }
};

CircleButton.displayName = 'CircleButton';