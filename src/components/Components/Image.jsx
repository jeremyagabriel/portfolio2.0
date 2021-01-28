/** @jsx jsx */
import { jsx, Box, Image as ThemeImage } from 'theme-ui';
import { useMemo } from 'react';
import { memo, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


export const Image = memo(({
  lazy = true,
  src,
  alt,
  ...props
}) => {

  const [ isVisible, setIsVisible ] = useState(lazy ? false : true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!isVisible) setIsVisible(true);
  }, [inView])

  return (
    <Box ref={ref}>
      { inView || !lazy
          ? <ThemeImage
              data-comp={Image.displayName}
              src={src}
              alt={alt || 'Image'}
              {...props}
            />
          : null
      }
    </Box>
  );
})

Image.displayName = 'Image';