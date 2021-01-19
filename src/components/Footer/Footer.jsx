/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import React from 'react';

export const Footer = ({ ...props }) => {
  return (
    <Box
      data-comp={Footer.displayName}
      sx={footerSx}
      {...props}
    >
      <Text>Footer</Text>
    </Box>
  )
}

const footerSx = {
  minHeight: '400px',
  bg: 'secondary',
};

Footer.displayName = 'Footer';