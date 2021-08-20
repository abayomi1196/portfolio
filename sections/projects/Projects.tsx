import { Wrapper, Title, SubTitle, ProjectsContainer } from './Projects.styled';

import Project from './project/Project';
// import { projects } from './projectData';

const projects = [
  {
    title: 'TEF Restaurant',
    image: '/projects/tef-preview.png',
    stack: ['React', 'Redux', 'Axios', 'Styled Components'],
    url: 'https://food.tef.ng',
    text: 'Food ordering application built for Tamuno Exalted Fingers (TEF) Restaurant. I was tasked primarily with connecting to the backend and implementing general application functionality.',
  },

  {
    title: 'Propexx Admin Console',
    image: '/projects/propexx-preview.png',
    stack: ['React', 'Redux', 'Axios'],
    url: 'https://admin.propexx.com',
    text: 'Admin Console for a Property Management Dashboard Application, used primarily to manage staff, agents, customers, properties and more',
  },
  {
    title: 'Netflix Clone',
    image: '/projects/netflix-preview.png',
    stack: ['React', 'SASS', 'Firebase'],
    url: 'https://ayosnetflixclone2.netlify.app/',
    text: "A beginner's attempt at cloning the popular streaming service. built primarily to master basic to intermediate React topics, also an introduction to Firebase",
  },
  {
    title: 'Countries of the world.',
    image: '/projects/countries-preview.png',
    stack: ['React', 'SASS'],
    url: 'https://ayoscountries2.netlify.app/',
    text: 'A front-end challenge that required me to integrate with the REST Countries API to pull country data and display it like in the designs.',
  },
];

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
