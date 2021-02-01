/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { MotionBox } from '../Components';


export const ClickRipple = ({
  controls,
  mouseClick,
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
            background: '#000000',
            transform,
            transition: {
              duration,
              delay: 0,
            }
          }
        }}
        style={{ background: '#000000' }}
        sx={cirlceSx(mouseClick)}
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
              delay: 0.05,
            }
          }
        }}
        style={{ background: '#ffffff' }}
        sx={cirlceSx(mouseClick)}
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
        style={{ background: '#000000' }}
        sx={cirlceSx(mouseClick)}
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
        style={{ background: '#F65054' }}
        sx={cirlceSx(mouseClick)}
      />
    </Box>
  )
}

const transform = 'scale(5000)';

const duration = 1.5;

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

const cirlceSx = mouseClick => ({
  width: '1px',
  height: '1px',
  borderRadius: '50%',
  position: 'absolute',
  top: mouseClick.y,
  left: mouseClick.x,
});

ClickRipple.displayName = 'ClickRipple';