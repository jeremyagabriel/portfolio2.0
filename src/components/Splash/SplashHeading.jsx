/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, MotionBox, MotionText } from '../Components';
import { SplashLinesLeft } from './SplashLinesLeft';
import { SplashLinesRight } from './SplashLinesRight';


export const SplashHeading = () => {

  return (
    <MotionBox
      data-comp={SplashHeading.displayName}
      initial='visible'
      animate='hidden'
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0, transition: { delay: 1.8, duration: 0.3 }}
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 5,
        transform: 'rotate(-15deg)',
      }}
    >
      <Flex>
        <SplashLinesLeft />

        <MotionText
          text='HELLO'
          variant='text.h2'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              x: '-70%',
              opacity: 0,
            },
            visible: {
              x: '0',
              opacity: [0, 0, 1],
              transition: {
                duration: 0.4,
                // type: "spring",
                // stiffness: 700,
                // damping: 30,
              }
            }
          }}
          sx={{
            color: 'white',
            fontSize: [setVw(150), null, '150px'],
            fontWeight: 'semi',
            fontStyle: 'italic',
            'WebkitTextFillColor': 'transparent',
            'WebkitTextStrokeWidth': '1.5px',
            'WebkitTextStrokeColor': 'white',
            mr: [setVw(192), null, '192px']
          }}
        />
      </Flex>

      <Flex sx={{ mb: [setVw(192), null, '192px'] }} >
        <MotionText
          text='WORLD'
          variant='text.h2'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              x: '70%',
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: [0, 0, 1],
              transition: {
                // duration: 0.3,
                // type: "spring",
                // stiffness: 700,
                // damping: 30,
                duration: 0.4,
              }
            }
          }}
          sx={{
            color: 'white',
            fontSize: [setVw(150), null, '150px'],
            fontWeight: 'semi',
            fontStyle: 'italic',
            mt: [setVw(-30), null, '-30px'],
            ml: [setVw(192), null, '192px'],
          }}
        />

        <SplashLinesRight />
      </Flex>
    </MotionBox>
  )
}

const bp = 600;
const setVw = px => px / (bp / 100) + 'vw';

SplashHeading.displayName = 'SplashHeading';