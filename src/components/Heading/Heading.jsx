/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { Flex, MotionBox } from '../Components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Heading = ({
  heading,
  subheading,
  styles
}) => {

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Box
      data-comp={Heading.displayName}
      sx={{
        maxWidth: '600px',
        mb: [10],
        ...styles
      }}
    >
      <MotionBox
        variants='default'
        animateOnLoad={true}
        threshold={0.25}
      >
        <Flex
          sx={{
            alignItems: 'center',
            mb: [1],
            pl: [1],
            overflow: 'hidden'
          }}
        >
          <Text
            variant='text.h4'
            sx={{
              color: 'primary',
              letterSpacing: '0.05em',
              mr: [3],
            }}
          >
            {subheading}
          </Text>
          <motion.div
            ref={ref}
            animate={inView && 'visible'}
            variants={{
              hidden: { x: '200px' },
              visible: {
                x: 0,
                transition: {
                  duration: 0.8,
                },
              }
            }}
            sx={{
              height: '2px',
              width: ['30px', '60px'],
              bg: 'primary'
            }}
          />
        </Flex>
        <Text variant='text.h1'>
          {heading}
        </Text>
      </MotionBox>
    </Box>
  );
}

Heading.displayName = 'Heading';