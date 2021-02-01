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
            background: '#F65054',
            transform: 'scale(1)'
          },
          visible: {
            background: 'black',
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
            background: '#F65054',
            transform: 'scale(1)'
          },
          visible: {
            background: 'white',
            transform: 'scale(2000)',
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
            background: '#F65054',
            transform: 'scale(1)'
          },
          visible: {
            background: 'black',
            transform: 'scale(2000)',
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
            background: '#F65054',
            transform: 'scale(1)'
          },
          visible: {
            background: '#F65054',
            transform: 'scale(2000)',
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

const duration = 1.2;

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
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  position: 'absolute',
  top: mouseClick.y,
  left: mouseClick.x,
});

ClickRipple.displayName = 'ClickRipple';