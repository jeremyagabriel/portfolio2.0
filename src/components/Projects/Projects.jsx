/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Lazy, Navigation, Pagination } from 'swiper';
import { useSetRecoilState } from 'recoil';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { Flex, MotionBox, MotionText, Image, FlexCol } from '../Components';
import { CircleButton } from '../CircleButton';
import { Heading } from '../Heading';
import { ProjectCard } from './ProjectCard';
import { projectsAtom } from '../../lib/atoms';

SwiperCore.use([Navigation, Pagination, Lazy]);


export const Projects = ({ projects }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const setProjectsRef = useSetRecoilState(projectsAtom);
  const ref = useRef(null);

  useEffect(() => {
    setProjectsRef(ref);
  }, [])

  return (
    <FlexCol
      data-comp={Projects.displayName}
      ref={ref}
      id='projects'
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        pt: [2],
        mb: [8, 10, 20],
      }}
    >
      <Heading
        heading='Projects'
        subheading='Featured Work'
      />

      <Flex
        sx={{
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1100px',
        }}
      >
        { projects?.slice(0, isExpanded ? projects.length : 4)
          .map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
            />
        ))}
      </Flex>

      <MotionBox
        variants='default'
        animateOnLoad={true}
      >
        { !isExpanded &&
          <CircleButton
            text='See More'
            circleSx={{
              // width: '50px',
              // height: '50px',
              borderColor: 'black',
            }}
            textSx={{
              color: 'black',
              fontSize: '18px'
            }}
            onClick={() => setIsExpanded(true)}
          />
        }
      </MotionBox>
    </FlexCol>
  );
}

const SwiperCss = {
  // width: '100%',
  // height: '100%',
  width: '100%',
  height: '600px'
};

const elementTop = 620;

Projects.displayName = 'ProjectsSection';

{/* <Swiper
spaceBetween={50}
slidesPerView={2}
navigation
lazy
pagination={{ clickable: true }}
css={SwiperCss}
>
{ projects?.map((project, index) => (
  <SwiperSlide key={index}>
    <ProjectCard
      project={project}
    />
  </SwiperSlide>
))}
</Swiper> */}