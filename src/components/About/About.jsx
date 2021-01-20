/** @jsx jsx */
import { jsx, Text, Box, Flex } from 'theme-ui';
import { motion, useAnimation } from "framer-motion";

export const About = () => {

  return (
    <Box
      data-comp={About.displayName}
    >
      <Flex sx={{ alignItems: 'center', mb: [2], pl: [1] }}>
        <Text
          variant='text.h4'
          sx={{
            color: 'primary',
            // fontWeight: 'regular',
            letterSpacing: '0.05em',
            mr: [3]
          }}
        >
          Hello World
        </Text>
        <Box sx={{ height: '2px', width: '60px', bg: 'primary' }}/>
      </Flex>
      <Text variant='text.h1'>About Me</Text>
    </Box>
  );
}



About.displayName = 'AboutSection';