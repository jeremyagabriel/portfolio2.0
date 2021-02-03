/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useRef, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Flex, FlexCol } from '../Components';
import { CtaButton } from '../CtaButton';
import { Heading } from '../Heading';
import { ProjectCard } from './ProjectCard';
import { projectsAtom } from '../../lib/atoms';


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
        mb: [8, 10, 16],
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
          maxWidth: '1200px',
        }}
      >
        { projects?.slice(0, isExpanded ? projects.length : 4)
          .map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              index={index}
            />
        ))}
      </Flex>

      { !isExpanded &&
        <CtaButton
          icon={HiOutlineArrowDown}
          ctaText='See More Work'
          side='top'
          onClick={() => setIsExpanded(true)}
          styles={{ mt: [0, 5] }}
        />
      }
    </FlexCol>
  );
}

Projects.displayName = 'ProjectsSection';