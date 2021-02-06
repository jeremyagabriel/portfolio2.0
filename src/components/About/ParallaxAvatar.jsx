/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Image } from '../Components';
import { Line } from '../Animations';
import JeremyCartoon from '../../assets/images/jeremy-cartoon.jpg';
import Halftone from '../../assets/images/halftone.png';


export const ParallaxAvatar = () => {

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(
    scrollY,
    [elementTop, elementTop + 20], [0, -1],
    { clamp: false }
  );
  const y2 = useTransform(
    scrollY,
    [elementTop, elementTop + 10], [0, -1],
    { clamp: false }
  );
  const y3 = useTransform(
    scrollY,
    [elementTop, elementTop + 5], [0, -1],
    { clamp: false }
  );
  const y4 = useTransform(
    scrollY,
    [elementTop, elementTop + 15], [0, -1],
    { clamp: false }
  );

  return (
    <Box
      data-comp={ParallaxAvatar.displayName}
      sx={{
        position: 'relative',
        minWidth: '240px',
        minHeight: '240px',
        maxWidth: '240px',
        maxHeight: '240px',
        width: '240px',
        height: '240px',
        mb: [6, null, null, 0],
      }}
    >
      <motion.div
        sx={{
          width: 'inherit',
          height: 'inherit',
          borderRadius: '50%',
          bg: 'primary',
          background: `linear-gradient(108deg,
            rgba(246,80,84,1) 24%,
            rgba(207,85,88,1) 100%)`,
        }}
        style={{ y: y1 }}
      />
      <motion.div
        sx={{
          position: 'absolute',
          top: '40px',
          width: '160px',
          right: '-20px',
        }}
        style={{ y: y3 }}
      >
        <Image
          src={Halftone}
          sx={{
            width: '100%',
            objectFit: 'contain',
            height: 'auto',
            filter: 'invert(1)'
          }}
        />
      </motion.div>

      <motion.div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          top: 0,
          bottom: 0,
        }}
        style={{ y: y2 }}
      >
        <Line />
        <Line
          hiddenX='105%'
          styles={{
            top: '108px',
            left: '-20px',
            width: '300px',
          }}
        />
        <Line
          styles={{
            top: '140px',
            left: '-20px',
            width: '280px',
          }}
        />
      </motion.div>
      <motion.div
        sx={{
          position: 'absolute',
          top: '-60px',
          left: '70px',
        }}
        style={{ y: y4 }}
      >
        <Image
          src={JeremyCartoon}
          alt='Jeremy Gabriel Avatar'
          lazy={false}
          sx={{
            height: ['320px', null, null, '380px'],
            objectFit: 'contain',
            userSelect: 'none',
          }}
        />
      </motion.div>
    </Box>
  );
}

const elementTop = 620;

ParallaxAvatar.displayName = 'ParallaxAvatar';