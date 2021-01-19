/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CircleButton } from '../CircleButton';
import { motion } from "framer-motion";

export const Buttons = () => {

  return (
    <motion.div
      data-comp={Buttons.displayName}
      sx={boxSx}
      initial='hidden'
      animate='visible'
      variants={motionVariant}
    >
      <CircleButton
        text='About'
        to={'/#'}
        circleSx={{ my: [1] }}
      />
      <CircleButton
        text='Work'
        to={'/#'}
        circleSx={{ my: [1] }}
      />
      <CircleButton
        icon={FaGithub}
        to={'https://github.com/jeremyagabriel'}
        circleSx={{ my: [1] }}
      />
      <CircleButton
        icon={FaLinkedin}
        to={'https://www.linkedin.com/in/jeremyagabriel'}
        circleSx={{ my: [1] }}
      />
    </motion.div>
  )
}

const boxSx = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  mr: [12],
};

const motionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

Buttons.displayName = 'Buttons';