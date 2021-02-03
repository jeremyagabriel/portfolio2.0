/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const Line = ({
  styles,
  motionSx,
  duration = 0.3,
  delay,
  hiddenX = '-105%',
  visibleX = 0,
  color = 'secondary',
  variants,
  animate,
  children,
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
              x: hiddenX
            },
            visible: {
              x: visibleX,
              transition: {
                duration,
                delay,
              },
            }
          }
        }
        sx={{
          position: 'absolute',
          bg: color,
          width: '100%',
          height: '100%',
          ...motionSx,
        }}
      />
      { children }
    </Box>
  );
}

Line.displayName = 'AnimatedLine';