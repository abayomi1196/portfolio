import { Element as ScrollElement } from "react-scroll";

import {
  Wrapper,
  Title,
  SubTitle,
  ProjectsContainer,
  Container
} from "./Projects.styled";

import Project from "./project/Project";
import { projects } from "./projectData";

const Projects = () => {
  return (
    <ScrollElement name='projects'>
      <Wrapper>
        <Container>
          <Title>Featured projects.</Title>
          <SubTitle>
            Here are some recent projects I&apos;ve worked on.{" "}
          </SubTitle>

          <ProjectsContainer>
            {projects.map((project) => (
              <div key={project.url} className='mt-10'>
                <Project
                  title={project.title}
                  image={project.image}
                  summary={project.summary}
                  githubLink={project.github}
                  externalLink={project.url}
                  stack={project.stack}
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
