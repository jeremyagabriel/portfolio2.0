/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { MotionBox, MotionText } from '../Components';

export const HeaderHeading = () => {

  return (
    <Box data-comp={HeaderHeading.displayName}>
      <MotionBox
        animate='show'
        variants={container}
      >
        { heading.map((word, index) => (
          <MotionText
            key={index}
            variants={item}
            variant='text.h2'
            sx={index === 0
              ? { ...textSx, ...outlineTextSx }
              : textSx
            }
          >
            {word}
          </MotionText>
        ))}
      </MotionBox>
    </Box>
  );
}

const heading = ['Full-Stack', 'Software', 'Developer'];

const textSx = {
  color: 'white',
  fontSize: ['70px', '90px', null, '110px', '130px'],
};

const outlineTextSx = {
  'WebkitTextFillColor': 'transparent',
  'WebkitTextStrokeWidth': '1px',
  'WebkitTextStrokeColor': 'white',
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

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
      delay: 2.4
    },
  }
};

HeaderHeading.displayName = 'HeaderHeading';