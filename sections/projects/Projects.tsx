import { Wrapper, Title, SubTitle, ProjectsContainer } from './Projects.styled';

import Project from './project/Project';
import { projects } from './projectData';

const Projects = () => {
  return (
    <Wrapper>
      {/* complete work on style */}
      <div
        style={{ maxWidth: '54rem', margin: '0 auto' }}
        // className="max-w-4xl mx-auto"
      >
        <Title>Recent Projects</Title>
        <SubTitle>
          Brief overview of some personal and freelance projects
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
      </div>
    </Wrapper>
  );
};

export default Projects;
