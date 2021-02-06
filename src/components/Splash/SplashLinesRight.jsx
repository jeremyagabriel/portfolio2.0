/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Line } from '../Animations';


export const SplashLinesRight = () => {

  return (
    <Box
      data-comp={SplashLinesRight.displayName}
      sx={{
        width: [setVw(150), null, '150px'],
        ml: [setVw(-20), null, '-20px'],
      }}
    >
      <Line
        color='white'
        animate='visible'
        styles={{
          transform: 'rotate(0deg)',
          width: [setVw(80), null, '80px'],
          left: 'auto',
          top: 'auto',
          right: [setVw(55), null, '55px'],
          bottom: [setVw(30), null, '30px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '10%',
            // x: '0'
          },
          visible: {
            x: '-105%',
            // x: '0',
            transition: {
              duration: 0.9,
              delay: 0.12,
            },
          }
        }}
        motionSx={{
          width: '3000%',
        }}
      />
      <Line
        color='white'
        animate='visible'
        styles={{
          transform: 'rotate(0deg)',
          width: [setVw(100), null, '100px'],
          left: 'auto',
          top: 'auto',
          right: [setVw(25), null, '25px'],
          bottom: [setVw(60), null, '60px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '10%',
            // x: '0'
          },
          visible: {
            x: '-105%',
            // x: '0',
            transition: {
              duration: 0.9,
              delay: 0.15,
            },
          }
        }}
        motionSx={{
          width: '3000%',
        }}
      />
      <Line
        color='white'
        animate='visible'
        styles={{
          transform: 'rotate(0deg)',
          width: [setVw(60), null, '60px'],
          left: 'auto',
          top: 'auto',
          right: [setVw(65), null, '65px'],
          bottom: [setVw(100), null, '100px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '10%',
            // x: '0'
          },
          visible: {
            x: '-105%',
            // x: '0',
            transition: {
              duration: 0.9,
              delay: 0.2,
            },
          }
        }}
        motionSx={{
          width: '3000%',
        }}
      >
      </Line>
      <Box
        sx={{
          position: 'absolute',
          top: [setVw(54), null, '54px'],
          right: [setVw(105), null, '105px'],
          height: [setVw(10), null, '10px'],
          width: [setVw(5), null, '5px'],
          bg: '#ea3034',
          zIndex: 10,
        }}
      />
    </Box>
  );
}

const bp = 600;
const setVw = px => px / (bp / 100) + 'vw';

SplashLinesRight.displayName = 'SplashLinesRight';