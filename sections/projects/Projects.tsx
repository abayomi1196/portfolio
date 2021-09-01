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
    <Wrapper>
      <Container>
        <Title>Stuff I&apos;ve Worked On.</Title>
        <SubTitle>
          Whether in my free time, or freelancing, I like to keep busy.{' '}
        </SubTitle>

        <ProjectsContainer>
          {projects.map((project) => (
            <div key={project.url} className="mt-10">
              <Project
                url={project.url}
                title={project.title}
                stack={project.stack}
                image={project.image}
                text={project.text}
              />
            </div>
          ))}
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
};

export default Projects;
