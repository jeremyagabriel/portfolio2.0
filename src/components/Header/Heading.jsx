/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { MotionBox, Motion, MotionText } from '../Components';

export const Heading = () => {

  return (
    <Box data-comp={Heading.displayName}>
      <MotionBox
        initial='hidden'
        animate='show'
        variants={container}
      >
        <MotionBox variants={item}>
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

Heading.displayName = 'HeaderHeading';