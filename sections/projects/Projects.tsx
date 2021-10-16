import { Element as ScrollElement } from 'react-scroll';

import {
  Wrapper,
  Title,
  SubTitle,
  ProjectsContainer,
  Container,
} from './Projects.styled';

import Project from './project/Project';
import { projects } from './projectData';

const Projects = () => {
  return (
    <ScrollElement name="projects">
      <Wrapper>
        <Container>
          <Title>Stuff I&apos;ve Worked On.</Title>
          <SubTitle>
            Here are some recent projects I&apos;ve worked on.{' '}
          </SubTitle>

          <ProjectsContainer>
            {projects.map((project) => (
              <div key={project.url} className="mt-10">
                <Project
                  slug={project.slug}
                  title={project.title}
                  image={project.image}
                  summary={project.summary}
                />
              </div>
            ))}
          </ProjectsContainer>
        </Container>
      </Wrapper>
    </ScrollElement>
  );
};

export default Projects;
