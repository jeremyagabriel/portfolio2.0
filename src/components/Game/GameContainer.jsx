/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from '../Components';
import { FaTimes } from 'react-icons/fa';
import Battleship from './Battleship';


export const GameContainer = ({
  onClose,
  ...props
}) => {

  return (
    <AnimatePresence>
      <MotionBox
        data-comp={GameContainer.displayName}
        sx={boxSx}
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 700,
              damping: 30,
              duration: 0.8,
              delay: 1,
            },
          }
        }}
        {...props}
      >
        <Battleship />
        <FaTimes
          sx={{
            color: 'white',
            fontSize: '30px',
            cursor: 'pointer',
            position: 'absolute',
            top: [3],
            right: [3],
          }}
          onClick={onClose}
        />
      </MotionBox>
    </AnimatePresence>
  );
}

const boxSx = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pt: [10, 8, 5],
  zIndex: 3,
};

GameContainer.displayName = 'GameContainer';