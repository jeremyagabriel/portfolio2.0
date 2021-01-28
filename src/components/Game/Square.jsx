/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import React from 'react';
import '../game/Battleship.css';

const Square = props => {
  const handleClickToApp = () => {
    props.handleClick(props.index);
  }
  return(
    <Box
      id="square"
      onClick = { handleClickToApp}
    >
      <Image src = { props.value } alt = "photos" className = "photos"/>
    </Box>
  );
}
export default Square;