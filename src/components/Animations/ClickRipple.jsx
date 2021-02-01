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
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: '#7A0003',
            // background: '#000000',
            transform: 'scale(3000)',
            transition: {
              duration,
              delay: 0,
            }
          }
        }}
        sx={cirlceSx(mouseClick)}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: '#290001',
            // background: '#ffffff',
            transform,
            transition: {
              duration,
              delay: 0.1,
            }
          }
        }}
        sx={cirlceSx(mouseClick)}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: '#7A0003',
            // background: '#000000',
            transform,
            transition: {
              duration,
              delay: 0.2,
            }
          }
        }}
        sx={cirlceSx(mouseClick)}
      />
      <MotionBox
        animate={controls}
        variants={{
          hidden: {
            background: 'transparent',
            transform: 'scale(1)'
          },
          visible: {
            background: '#F65054',
            // background: '#F65054',
            transform,
            transition: {
              duration,
              delay: 0.3,
            }
          }
        }}
        sx={cirlceSx(mouseClick)}
      />
    </Box>
  )
}

const transform = 'scale(3000)';

const duration = 1;

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
  width: '3px',
  height: '3px',
  borderRadius: '50%',
  position: 'absolute',
  top: mouseClick.y,
  left: mouseClick.x,
});

ClickRipple.displayName = 'ClickRipple';