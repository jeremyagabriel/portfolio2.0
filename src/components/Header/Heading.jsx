/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { motion, useAnimation } from "framer-motion";

export const Heading = () => {

  return (
    <Box data-comp={Heading.displayName}>
      <motion.div
        initial='hidden'
        animate='show'
        variants={container}
      >
        <motion.div variants={item}>
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
        </motion.div>
        <motion.div variants={item}>
          <Text
            variant='text.h2'
            sx={textSx}
          >
            Software
          </Text>
        </motion.div>
        <motion.div variants={item}>
          <Text
            variant='text.h2'
            sx={textSx}
          >
            Developer
          </Text>
        </motion.div>
      </motion.div>
    </Box>
  );
}

const textSx = {
  color: 'white',
  fontSize: ['100px', null, null, null, '120px'],
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.05
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