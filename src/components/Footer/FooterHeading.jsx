/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FlexCol, MotionBox, MotionText } from '../Components';
import { UnderlineButton } from '../UnderlineButton';


export const FooterHeading = () => {

  return (
    <FlexCol
      data-comp={FooterHeading.displayName}
      sx={boxSx}
    >
      <MotionText
        animateOnLoad={true}
        variants='default'
        variant='text.h2'
        threshold={0.25}
        sx={{
          ...textSx,
          'WebkitTextFillColor': 'transparent',
          'WebkitTextStrokeWidth': '1px',
          'WebkitTextStrokeColor': 'white',
        }}
      >
        LET'S BUILD
      </MotionText>
      <MotionText
        animateOnLoad={true}
        variants='default'
        variant='text.h2'
        threshold={0.25}
        sx={{
          ...textSx,
          mb: [3]
        }}
      >
        TOGETHER
      </MotionText>
      <MotionBox
        animateOnLoad={true}
        variants='default'
        threshold={0.25}
      >
        <UnderlineButton
          text='jeremyagabriel.dev@gmail.com'
        />
      </MotionBox>
    </FlexCol>
  )
}

const boxSx = {
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  pl: [3, 5]
};

const textSx = {
  color: 'white',
  fontSize: ['70px', '90px', null, '110px', '130px'],
};

FooterHeading.displayName = 'FooterHeading';