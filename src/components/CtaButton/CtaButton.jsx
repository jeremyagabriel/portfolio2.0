/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { useAnimation } from 'framer-motion';
import { MotionBox } from '../Components';
import { CircleButton } from '../CircleButton';


export const CtaButton = ({
  styles,
  ctaText,
  buttonText,
  icon,
  side,
  to,
  ctaTextSx,
  circleSx,
  iconSx,
  textSx,
  ...props
}) => {

  const controls = useAnimation();

  return (
    <MotionBox
      data-comp={CtaButton.displayName}
      variants='default'
      animateOnLoad={true}
      onHoverStart={() => controls.start('visible')}
      onHoverEnd={() => controls.start('hidden')}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        ...styles,
      }}
      {...props}
    >
      <Text
        variant='text.h4'
        sx={{ mr: [2], ...ctaTextSx }}
      >
        {ctaText}
      </Text>
      <CircleButton
        text={buttonText}
        to={to}
        animate={controls}
        icon={icon}
        side={side}
        circleSx={{
          width: '50px',
          height: '50px',
          borderColor: 'secondary',
          ...circleSx,
        }}
        iconSx={{
          color: 'secondary',
          fontSize: '24px',
          ...iconSx
        }}
        textSx={textSx}
      />
    </MotionBox>
  );
}

CtaButton.displayName = 'CtaButton';