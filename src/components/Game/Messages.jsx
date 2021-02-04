/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';

const Messages = props => {
  let message;
  if (props.hitCounter === 0) {
    message = <Text sx={{color: 'white'}} key="winMessage">
                You found all the doggos!
              </Text>;
  } else if (props.torpCounter === 0 && props.hitCounter !== 0) {
    message = <Text sx={{color: 'white'}} key="loseMessage">
                No more dog treats - try again!
              </Text>;
  } else if (props.sunk) {
    message = <Text sx={{color: 'white'}} key="foundFamilyMessage">
                You found a whole doggo family!
              </Text>;
  } else if (props.hit) {
    message = <Text sx={{color: 'white'}} key="foundMessage">
                You found a doggo!
              </Text>;
  } else if (props.miss) {
    message = <Text sx={{color: 'white'}} key="missMessage">
                You wasted a treat!
              </Text>;
  }
  return(
    <>
      { message }
    </>
  );
}
export default Messages;