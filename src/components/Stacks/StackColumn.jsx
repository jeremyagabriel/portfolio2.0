/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { FlexCol, MotionBox, MotionText, Image } from '../Components';


export const StackColumn = ({ stacks, styles }) => {

  return (
    <FlexCol sx={styles} >
      { stacks.map((type, index) => (
        <FlexCol
          data-comp={StackColumn.displayName}
          key={index}
          sx={{
            alignItems: 'center',
            mb: index === stacks.length - 1 ? 0 : [4, 6, 8]
          }}
        >
          <MotionText
            variant='text.h2'
            sx={{
              mb: [2, 3],
              // color: 'primary',
            }}
            animateOnLoad={true}
            variants='default'
          >
            {type.title}
          </MotionText>
          <MotionBox
            animateOnLoad={true}
            variants='default'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '330px',
            }}
          >
            { type.list.map((stack, index) => (
              <FlexCol
                key={index}
                sx={{
                  alignItems: 'center',
                  width: '90px',
                  m: [1],
                }}
              >
                <MotionBox
                  variants='default'
                  animateOnLoad={true}
                >
                  <Image
                    src={stack.logo}
                    sx={{
                      width: '86px',
                      height: '86px',
                      // filter: 'invert(1)'
                    }}
                  />
                  <Text
                    sx={{
                      textAlign: 'center',
                      lineHeight: '1.1em',
                      // color: 'tertiary',
                    }}
                  >
                    { stack.label }
                  </Text>
                </MotionBox>
              </FlexCol>
            ))}
          </MotionBox>
        </FlexCol>
      ))}
    </FlexCol>
  );
}

StackColumn.displayName = 'StackColumn';