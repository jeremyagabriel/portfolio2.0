/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Line } from '../Animations';


export const SplashLinesLeft = () => {

  return (
    <Box
      data-comp={SplashLinesLeft.displayName}
      sx={{
        width: [setVw(150), null, '150px'],
        mr: [setVw(-20), null, '-20px'],
        position: 'relative'
      }}
    >
      <Line
        color='white'
        animate='visible'
        styles={{
          transform: 'rotate(0deg)',
          width: [setVw(100), null, '100px'],
          left: 'auto',
          top: 'auto',
          right: [setVw(24), null, '24px'],
          bottom: [setVw(30), null, '30px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '-105%',
            // x: '0'
          },
          visible: {
            x: '10%',
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
          right: [setVw(30), null, '30px'],
          bottom: [setVw(70), null, '70px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '-105%',
            // x: '0'
          },
          visible: {
            x: '10%',
            // x: '0',
            transition: {
              duration: 0.9,
              delay: 0.1,
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
          width: [setVw(120), null, '120px'],
          left: 'auto',
          top: 'auto',
          right: [setVw(5), null, '5px'],
          bottom: [setVw(100), null, '100px'],
          height: '1.5px',
        }}
        variants={{
          hidden: {
            x: '-105%',
            // x: '0'
          },
          visible: {
            x: '10%',
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
          top: [setVw(46), null, '46px'],
          right: [setVw(30), null, '30px'],
          height: [setVw(10), null, '10px'],
          width: [setVw(10), null, '10px'],
          bg: '#ea3034',
          zIndex: 10,
        }}
      />
    </Box>
  );
}

const bp = 600;
const setVw = px => px / (bp / 100) + 'vw';

SplashLinesLeft.displayName = 'SplashLinesLeft';