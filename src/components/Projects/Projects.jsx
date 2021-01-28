/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSetRecoilState } from 'recoil';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { Flex, MotionBox, MotionText, Image, FlexCol } from '../Components';
import { CircleButton } from '../CircleButton';
import { ProjectCard } from './ProjectCard';
import { projectsAtom } from '../../lib/atoms';


export const Projects = ({ projects }) => {

  const setProjectsRef = useSetRecoilState(projectsAtom);
  const ref = useRef(null);

  useEffect(() => {
    setProjectsRef(ref);
  }, [])


  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [elementTop, elementTop + 20], [0, -1], {
    clamp: false
  });
  const y2 = useTransform(scrollY, [elementTop, elementTop + 10], [0, -1], {
    clamp: false
  });
  const y3 = useTransform(scrollY, [elementTop, elementTop + 5], [0, -1], {
    clamp: false
  });

  return (
    <FlexCol
      data-comp={Projects.displayName}
      ref={ref}
      id='projects-section'
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          mr: [0, null, null, 12],
        }}
      >
        <MotionBox
          variants={itemVariant}
          animateOnLoad={true}
          sx={{ mb: [6] }}
        >
          <Flex sx={{ alignItems: 'center', mb: [1], pl: [1] }}>
            <Text
              variant='text.h4'
              sx={{
                color: 'primary',
                // fontWeight: 'regular',
                letterSpacing: '0.05em',
                mr: [3]
              }}
            >
              Featured Work
            </Text>
            <Box sx={{ height: '2px', width: ['30px', '60px'], bg: 'primary' }}/>
          </Flex>
          <Text variant='text.h1'>Projects</Text>
        </MotionBox>
      </Box>

      { projects?.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
          />
      ))}

    </FlexCol>
  );
}

const elementTop = 620;

const itemVariant = {
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

Projects.displayName = 'ProjectsSection';