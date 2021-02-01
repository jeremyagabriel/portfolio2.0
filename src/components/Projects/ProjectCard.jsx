/** @jsx jsx */
import { jsx, Text, Box, Link } from 'theme-ui';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { CircleButton } from '../CircleButton';
import { MotionBox, Image, Flex } from '../Components';
import { text } from '@fortawesome/fontawesome-svg-core';


export const ProjectCard = ({ project }) => {

  return (
    <Box
      data-comp={ProjectCard.displayName}
      sx={cardSx}
    >
      <MotionBox
        variants='default'
        animateOnLoad={true}
      >
        <Image
          src={project?.image?.fluid?.srcWebp}
          sx={{
            width: '100%',
            height: 'auto',
            mb: [2],
          }}
        />
      </MotionBox>

      <Box sx={{ mx: [1] }} >
        <MotionBox
          variants='default'
          animateOnLoad={true}
        >
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
              mb: [2],
              fontStyle: 'italic',
            }}
          >
            Built: { project?.completionDate }
          </Text>
        </MotionBox>

        <MotionBox
          variants='default'
          animateOnLoad={true}
        >
          <Text sx={{ mb: [3] }}>
            { project?.body?.body } {' '}
            <Link sx={linkSx} href={project.repoUrl} target='_blank'>
              View Repo
            </Link>
            { project.siteUrl &&
              <Link sx={linkSx} href={project.siteUrl} target='_blank'>
                {' '}| View App
              </Link>
            }
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
        </MotionBox>
      </Box>
    </Box>
  );
}

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  maxWidth: '100vw',
  my: [3],
  mx: [0, 0, 3],
};

const tagSx = {
  border: '1px solid',
  borderColor: 'primary',
  color: 'primary',
  p: '4px',
  mr: 1,
  mb: 1,
  fontWeight: 'medium',
};

const linkSx = {
  textDecoration: 'none',
  fontWeight: 'medium',
  color: 'black',
};


ProjectCard.displayName = 'ProjectCard';