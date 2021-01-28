/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { MotionBox } from '../Components';
import Battleship from './Battleship';


export const GameContainer = ({ onDrag, ...props }) => {

  return (
    <MotionBox
      data-comp={GameContainer.displayName}
      sx={boxSx}
      {...props}
    >
      {/* <Text
        variant='text.h2'
        sx={textSx}
      >
        Doggoship
      </Text> */}
      <Battleship />
    </MotionBox>
  );
}

const boxSx = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  p: [4],
};

const textSx = {

};

const motionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

GameContainer.displayName = 'GameContainer';