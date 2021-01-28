/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { MotionBox } from '../Components';


export const PlayButton = ({ onDrag, ...props }) => {

  return (
    <MotionBox
      data-comp={PlayButton.displayName}
      sx={boxSx}

      {...props}
    >
      <Text variant='text.h4' sx={textSx}>
        Pull To Play
      </Text>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: '30px',
          borderLeft: '30px solid #F65054',
          borderBottom: '44px solid white',
        }}
      />
    </MotionBox>
  );
}

const boxSx = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  // right: -530,
  top: '140px',
  left: -170,
  width: '170px',
  height: '44px',
  bg: 'white',
  cursor: 'pointer',
  'WebkitTouchCallout': 'none',
  'WebkitUserSelect': 'none',
  'UserSelect': 'none',
  // 'boxShadow': '10px 2px 3px -1px rgba(0,0,0,0.1)',
  // 'webkitBoxShadow': '10px 2px 3px -1px rgba(0,0,0,0.1)',
  // 'mozBoxShadow': '10px 2px 3px -1px rgba(0,0,0,0.1)',
};

const textSx = {
  color: 'primary',
  ml: 5,
};

const motionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

PlayButton.displayName = 'PlayButton';

// initial='hidden'
// animate='visible'
// variants={motionVariant}
// drag='x'
// dragConstraints={{ right: 0, left: 0 }}
// onDragStart={onDrag}