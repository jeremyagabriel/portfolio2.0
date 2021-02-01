/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React, { memo } from 'react';
import { useAnimation } from 'framer-motion';
import { Flex, MotionBox } from '../Components';


export const CircleButton = memo(({
  text,
  icon,
  to = null,
  onClick,
  circleSx,
  textSx,
  iconSx,
  animate,
  color = 'white',
  side = 'left',
  ...props
}) => {

  const Icon = icon;
  const controls = useAnimation();

  return (
    <MotionBox
      data-comp={CircleButton.displayName}
      sx={{
        ...initialCircleSx,
        ...circleSx,
      }}
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
      initial='hidden'
      animate={animate || controls}
      variants={circleVariant}
      {...props}
    >
      <MotionBox
        sx={bgSx(color)}
        initial='hidden'
        animate={animate || controls}
        variants={bgVariant}
      />
      <MotionBox
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
        initial='hidden'
        animate={animate || controls}
        variants={motionVariant(side)}
      >
        { text
          ? <>
              <Flex sx={{ ...motionSx, [side]: 0 }}>
                <Text
                  variant='text.h5'
                  sx={{ ...initialTextSx(color), ...textSx }}
                >
                  { text }
                </Text>
              </Flex>
              <Box sx={{ ...motionSx, [side]: '-50%' }} />
              <Flex sx={{ ...motionSx, [side]: '-150%' }}>
                <Text
                  variant='text.h5'
                  sx={{
                    ...initialTextSx(color === 'white' ? 'primary' : 'white'),
                    ...textSx
                  }}
                >
                  { text }
                </Text>
              </Flex>
            </>
          : icon
              ? <>
                  <Flex sx={{ ...motionSx, [side]: 0 }}>
                    <Icon
                      sx={{ ...initialIconSx(color), ...iconSx }}
                    />
                  </Flex>
                  <Box sx={{ ...motionSx, [side]: '-50%' }} />
                  <Flex sx={{ ...motionSx, [side]: '-150%' }}>
                    <Icon
                      sx={{
                        ...initialIconSx(color === 'white' ? 'primary' : 'white'),
                        ...iconSx
                      }}
                    />
                  </Flex>
                </>
              : null
        }
      </MotionBox>
    </MotionBox>
  );
});

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

const initialTextSx = color => ({
  position: 'absolute',
  color,
});

const initialIconSx = color => ({
  fontSize: '40px',
  color,
});

const bgSx = color => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  bg: color
});

const motionSx = {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
};

const transition = { duration: 0.3 };

const motionVariant = side => ({
  hidden: { x: '0%', y: '0%', transition },
  visible: {
    x: side === 'left' ? '150%' : side === 'right' ? '-150%' : null,
    y: side === 'top' ? '150%' : side === 'bottom' ? '-150%' : null,
    transition
  }
});

const circleVariant = {
  hidden: { scale: 1,  transition },
  visible: { scale: 1.1, transition }
};

const bgVariant = {
  hidden: { opacity: 0,  transition },
  visible: { opacity: 1, transition }
};

CircleButton.displayName = 'CircleButton';