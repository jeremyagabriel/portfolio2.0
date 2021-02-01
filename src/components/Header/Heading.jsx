/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { MotionBox, Motion, MotionText } from '../Components';
import { Line } from '../Animations'

export const Heading = () => {

  return (
    <Box data-comp={Heading.displayName}>
      <MotionBox
        animate='show'
        variants={container}
      >
        <MotionBox
          variants={item}
          sx={{ position: 'relative' }}
        >
          <Text
            variant='text.h2'
            sx={{
              ...textSx,
              'WebkitTextFillColor': 'transparent',
              'WebkitTextStrokeWidth': '1px',
              'WebkitTextStrokeColor': 'white',
            }}
          >
            Full-Stack
          </Text>
          {/* <Line
            styles={{
              top: '-20%',
              right: '-40%',
              width: '40%',
              left: 'auto',
              height: '2px',
              transform: 'rotate(-30deg)',
            }}
            color='white'
            variants={lineVariants(0.5)}
            animate='visible'
          />
          <Line
            styles={{
              top: '-40%',
              right: '-30%',
              width: '50%',
              left: 'auto',
              height: '2px',
              transform: 'rotate(-30deg)',
            }}
            color='white'
            variants={lineVariants(0.4)}
            animate='visible'
          />
          <Line
            styles={{
              top: '40%',
              right: '-30%',
              width: '30%',
              left: 'auto',
              height: '2px',
              transform: 'rotate(-30deg)',
            }}
            color='white'
            variants={lineVariants(0.6)}
            animate='visible'
          /> */}
        </MotionBox>
        <MotionBox variants={item}>
          <Text
            variant='text.h2'
            sx={textSx}
          >
            Software
          </Text>
        </MotionBox>
        <MotionBox variants={item}>
          <Text
            variant='text.h2'
            sx={textSx}
          >
            Developer
          </Text>
        </MotionBox>
      </MotionBox>
    </Box>
  );
}

const textSx = {
  color: 'white',
  fontSize: ['70px', '90px', null, '110px', '130px'],
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
}

const lineVariants = delay => ({
  hidden: {
    x: '105%'
  },
  visible: {
    x: '-100%',
    // x: '0',
    transition: {
      duration: 1,
      delay,
    },
  }
});

Heading.displayName = 'HeaderHeading';