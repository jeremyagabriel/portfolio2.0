/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CircleButton } from '../CircleButton';
import { MotionBox } from '../Components';


export const Buttons = ({
  aboutRef,
  projectsRef,
  ...props
}) => {

  const buttons = [
    { text: 'About', to: aboutRef },
    { text: 'Work', to: projectsRef },
    { icon: FaGithub, to: 'https://github.com/jeremyagabriel'},
    { icon: FaLinkedin, to: 'https://www.linkedin.com/in/jeremyagabriel'}
  ];

  return (
    <MotionBox
      data-comp={Buttons.displayName}
      sx={boxSx}
      initial='hidden'
      animate='visible'
      variants={motionVariant}
      {...props}
    >
      { buttons.map((button, index) => (
        <CircleButton
          key={index}
          text={button.text}
          icon={button.icon}
          to={button.to}
          {...circleSx}
        />
      ))}
    </MotionBox>
  )
}

const boxSx = {
  flexDirection: 'column',
  justifyContent: 'center',
  display: ['none', null, 'flex'],
  mr: [0, null, 6, 12],
};

const circleSx = {
  circleSx: {
    my: [1],
    width: ['50px', null, null, '80px'],
    height: ['50px', null, null, '80px'],
  },
  textSx: {
    fontSize: [2, null, null, 4]
  },
  iconSx: {
    fontSize: ['24px', null, null, '40px']
  }
};

const motionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, delay: 2.2 } }
};

Buttons.displayName = 'Buttons';