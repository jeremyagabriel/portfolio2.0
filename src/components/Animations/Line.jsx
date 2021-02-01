/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Line = ({ styles, x }) => {

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Box
      data-comp={Line.displayName}
      ref={ref}
      sx={{
        position: 'absolute',
        top: '100px',
        left: '-50px',
        width: '300px',
        height: '2px',
        bg: 'transparent',
        overflow: 'hidden',
        transform: 'rotate(-30deg)',
        ...styles
      }}
    >
      <motion.div
        initial='hidden'
        animate={inView && 'visible'}
        variants={{
          hidden: {
            x: x || '-105%'
          },
          visible: {
            x: 0,
            transition: {
              duration: 0.3,
            },
          }
        }}
        sx={{
          position: 'absolute',
          bg: 'secondary',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
}

Line.displayName = 'AnimatedLine';