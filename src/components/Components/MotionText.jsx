/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Component = motion.custom(Text);

export const MotionText = memo(({
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
      data-comp={MotionText.displayName}
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

MotionText.displayName = 'MotionText';