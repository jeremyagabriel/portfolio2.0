/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { MotionBox } from '../Components';


export const PlayButton = ({ onDrag, ...props }) => {

  return (
    <MotionBox
      data-comp={PlayButton.displayName}
      sx={boxSx}
      animate='visible'
      variants={{
        hidden: {
          x: '100%'
        },
        visible: {
          x: 0,
          transition: {
            // delay: 0.5,
            delay: 2.8,
            duration: 0.8,
          }
        }
      }}
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
          width: ['22px', null, '30px'],
          borderLeft: ['20px solid #F65054', null, '30px solid #F65054'],
          borderBottom: ['31px solid white', null, '44px solid white'],
        }}
      />
    </MotionBox>
  );
}

const boxSx = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: '140px',
  left: [-110, null, -170],
  width: ['110px', null, '170px'],
  height: ['31px', null, '44px'],
  bg: 'white',
  cursor: 'pointer',
  'WebkitTouchCallout': 'none',
  'WebkitUserSelect': 'none',
  'UserSelect': 'none',
};

const textSx = {
  color: 'primary',
  fontSize: [2, null, 4],
  ml: [3, null, 5],
};

PlayButton.displayName = 'PlayButton';