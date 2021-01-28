/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Component = motion.custom(Box);

export const MotionBox = memo(({
  children,
  initial = 'hidden',
  animate,
  variants = {},
  animateOnLoad = false,
  ...props
}) => {

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Component
      ref={ref}
      data-comp={MotionBox.displayName}
      initial={initial}
      animate={ animateOnLoad
        ? inView
          ? 'visible'
          : 'hidden'
        : animate
      }
      variants={variants}
      {...props}
    >
      { children }
    </Component>
  );
})

MotionBox.displayName = 'MotionBox';