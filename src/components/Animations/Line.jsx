/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Line = ({
  styles,
  duration = 0.3,
  x = '-105%',
  color = 'secondary',
  variants,
  animate,
}) => {

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
        animate={animate || (inView && 'visible')}
        variants={variants ||
          {
            hidden: {
              x
            },
            visible: {
              x: 0,
              transition: {
                duration,
              },
            }
          }
        }
        sx={{
          position: 'absolute',
          bg: color,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
}

Line.displayName = 'AnimatedLine';