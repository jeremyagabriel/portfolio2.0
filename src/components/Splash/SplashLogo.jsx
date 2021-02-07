/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { MotionBox } from '../Components';


export const SplashLogo = () => {

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.25,
          repeat: 1,
          repeatType: 'reverse',
          repeatDelay: 1.6,
        }
      }}
    >
      <MotionBox
        data-comp={SplashLogo.displayName}
        initial={{ y: 0 }}
        animate={{ y: '25%' }}
        transition={{
          repeat: 10,
          repeatType: 'reverse',
          duration: 0.8
        }}
        sx={circleSx}
      >
        <Text
          variant='text.h2'
          sx={{
            color: 'white',
            pb: '4px',
            useSelect: 'none',
          }}
        >
          J
        </Text>
      </MotionBox>
    </MotionBox>
  );
}

const circleSx = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
  p: [2],
  borderRadius: '50%',
  border: '1px solid white',
  width: '60px',
  height: '60px',
};

SplashLogo.displayName = 'SplashLogo';