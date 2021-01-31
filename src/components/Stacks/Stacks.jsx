/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Flex, FlexCol, MotionBox } from '../Components';
import { StackColumn } from './StackColumn';
import { Heading } from '../Heading';
import { stacksAtom } from '../../lib/atoms';
import { stacks } from '../../lib/stacks';


export const Stacks = () => {

  const setStacksRef = useSetRecoilState(stacksAtom);
  const ref = useRef(null);

  useEffect(() => {
    setStacksRef(ref);
  }, [])

  return (
    <FlexCol
      data-comp={Stacks.displayName}
      ref={ref}
      id='stacks'
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        pt: [2],
      }}
    >
      <Heading
        heading='Stacks'
        subheading='Stacks on'
      />

      <Flex
        sx={{
          justifyContent: 'center',
          flexDirection: ['column', null, null, 'row']
        }}
      >
        <StackColumn
          stacks={stacks.slice(0,2)}
          styles={{
            mr: [0, null, null, 8],
            mb: [4, 6, 8, 0]
          }}
        />
        <StackColumn
          stacks={stacks.slice(2,4)}
        />
      </Flex>
    </FlexCol>
  );
}

Stacks.displayName = 'StacksSection';