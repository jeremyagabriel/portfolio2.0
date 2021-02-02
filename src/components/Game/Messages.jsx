/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React from 'react';

const Messages = props => {
  let message;
  if (props.hitCounter === 0) {
    message = <Text sx={{}} key="winMessage">You found all the doggos!</Text>;
  } else if (props.torpCounter === 0 && props.hitCounter !== 0) {
    message = <Text key="loseMessage">No more dog treats - try again!</Text>;
  } else if (props.sunk) {
    message = <Text sx={{}} key="foundFamilyMessage">You found a whole doggo family!</Text>;
  } else if (props.hit) {
    message = <Text key="foundMessage">You found a doggo!</Text>;
  } else if (props.miss) {
    message = <Text sx={{}} key="missMessage">You wasted a treat!</Text>;
  }
  return(
    <>
      { message }
    </>
  );
}
export default Messages;