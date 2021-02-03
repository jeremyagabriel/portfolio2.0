/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { MotionBox } from '../Components';


export const ClickRipple = ({
  controls,
  mouseClick,
  browser,
  ...props
}) => {

  return (
    <Box
      sx={boxSx}
      {...props}
    >
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            transform: 'scale(1)',
            transition: {
              duration: 0,
            }
          },
          visible: {
            transform,
            transition: {
              duration,
              delay: 0,
            }
          }
        }}
        sx={{
          ...cirlceSx(mouseClick),
          background: '#ffffff',
        }}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            transform: 'scale(1)',
            transition: {
              duration: 0,
            }
          },
          visible: {
            transform,
            transition: {
              duration,
              delay: 0.2,
            }
          }
        }}
        sx={{
          ...cirlceSx(mouseClick),
          background: '#000000',
        }}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            transform: 'scale(1)',
            transition: {
              duration: 0,
            }
          },
          visible: {
            transform,
            transition: {
              duration,
              delay: 0.6,
            }
          }
        }}
        sx={{
          ...cirlceSx(mouseClick, browser),
          background: '#F65054',
        }}
      />
    </Box>
  )
}

const transform = 'scale(5000)';

const duration = 2;

const boxSx = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden'
};

const cirlceSx = (mouseClick, browser) => ({
  width: '1px',
  height: '1px',
  borderRadius: browser?.name === 'safari' ? 0 : '50%',
  position: 'absolute',
  top: mouseClick.y,
  left: mouseClick.x,
});

ClickRipple.displayName = 'ClickRipple';