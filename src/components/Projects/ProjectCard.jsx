/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { CircleButton } from '../CircleButton';
import { MotionBox, Image, Flex } from '../Components';
import { text } from '@fortawesome/fontawesome-svg-core';


export const ProjectCard = ({ project }) => {

  console.log('project', project);

  return (
    <MotionBox
      data-comp={ProjectCard.displayName}
      sx={cardSx}
    >
      <Image
        src={project?.image?.fluid?.srcWebp}
        sx={{
          width: '100%',
          height: 'auto',
          mb: [2],
        }}
      />

      <Text
        variant='text.h2'
        sx={{
          mb: [1]
        }}
      >
        { project?.heading }
      </Text>

      <Text
        variant='text.h4'
        sx={{
          display: project?.subheading ? 'block' : 'none',
          mb: [1],
          fontWeight: 'medium',
        }}
      >
        { project?.subheading }
      </Text>

      <Text
        sx={{
          mb: [2]
        }}
      >
        Built: { project?.completionDate }
      </Text>

      <Text sx={{ mb: [1] }}>
        { project?.body?.body }
      </Text>

      <Flex
        sx={{
          flexWrap: 'wrap',
        }}
      >
        { project?.tags?.map((tag, index) => (
            <Text
              key={index}
              variant='text.h5'
              sx={tagSx}
            >
              {tag}
            </Text>
        ))}
      </Flex>

      <MotionBox
        variants={appearVariant}
        animateOnLoad={true}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text
          variant='text.h4'
          sx={{ mr: [2] }}
        >
          View Repo
        </Text>
        <CircleButton
          icon={HiOutlineArrowRight}
          side='left'
          circleSx={{
            width: '50px',
            height: '50px',
            borderColor: 'secondary',
          }}
          iconSx={{ color: 'secondary', fontSize: '24px' }}
        />
      </MotionBox>
    </MotionBox>
  );
}

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  maxWidth: '100vw',
  m: [1, 2, 3],
};

const appearVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.8,
    },
  }
};

const tagSx = {
  color: 'primary',
  mr: 1,
  mb: 2,
};


ProjectCard.displayName = 'ProjectCard';