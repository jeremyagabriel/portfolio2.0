/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import { Flex, FlexCol, MotionBox, MotionText, Image } from '../Components';


export const StackColumn = ({ stacks, styles }) => {

  return (
    <FlexCol sx={styles} >
      { stacks.map((type, index) => (
        <FlexCol
          data-comp={StackColumn.displayName}
          key={index}
          sx={{
            alignItems: 'center',
            mb: index === stacks.length - 1 ? 0 : [7, 9, 10]
          }}
        >
          <MotionText
            variant='text.h2'
            sx={{
              mb: [2, 3],
            }}
            animateOnLoad={true}
            variants='default'
            threshold={0.5}
          >
            {type.title}
          </MotionText>
          <Flex
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
                  threshold={0.25}
                >
                  <Image
                    src={stack.logo}
                    sx={{
                      width: '86px',
                      height: '86px',
                      filter: 'invert(1)'
                    }}
                    minHeight='86px'
                  />
                  <Text
                    sx={{
                      textAlign: 'center',
                      lineHeight: '1.1em',
                    }}
                  >
                    { stack.label }
                  </Text>
                </MotionBox>
              </FlexCol>
            ))}
          </Flex>
        </FlexCol>
      ))}
    </FlexCol>
  );
}

StackColumn.displayName = 'StackColumn';