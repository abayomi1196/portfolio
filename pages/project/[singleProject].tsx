import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

// @ts-ignore
import Fade from 'react-reveal/Fade';

import { projects, projectType } from 'sections/projects/projectData';

import { Layout, Contact } from 'sections';

import {
  Container,
  Wrapper,
  Title,
  ProjectLink,
  Description,
  StackList,
  ImageWrapper,
  Details,
  OtherProjects,
  ProjectLinksWrapper,
} from 'styles/singleProject.styled';

type SingleProjectProps = {
  projectDetails: projectType;
};

const SingleProject = ({ projectDetails }: SingleProjectProps) => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Fade bottom>
            <Title>
              {projectDetails.title}{' '}
              {projectDetails.inDevelopment && <small>In Development</small>}{' '}
            </Title>
          </Fade>

          <Fade bottom={500}>
            <Description>{projectDetails.summary}</Description>
            <ProjectLinksWrapper>
              <span>
                <ProjectLink
                  href={projectDetails.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </ProjectLink>
              </span>

              {projectDetails.github && (
                <span>
                  <ProjectLink
                    href={projectDetails.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </ProjectLink>
                </span>
              )}
            </ProjectLinksWrapper>
          </Fade>

          <ImageWrapper
            href={projectDetails.url}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={projectDetails.image}
              alt={projectDetails.title}
              width={1920}
              height={768}
              objectFit="cover"
            />
          </ImageWrapper>

          <StackList>
            {projectDetails.stack.map((tech, id) => (
              <li key={id}>{tech}</li>
            ))}
          </StackList>

          <Details>
            <h3>Implementation</h3>
            <p>{projectDetails.implementation}</p>
          </Details>

          <Details>
            <h3>Lessons Learned</h3>
            <p>{projectDetails.lessonsLearned}</p>
          </Details>

          <OtherProjects>
            I also built:{' '}
            {projectDetails.otherProjects.map((item) => (
              <Link href={item.link} key={item.link}>
                {item.name}
              </Link>
            ))}
          </OtherProjects>
        </Container>
        <Contact />
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  const { singleProject } = context.params;

  const projectDetails = projects.find(
    (project) => project.slug === singleProject
  );

  return {
    props: { projectDetails },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { singleProject: project.slug },
  }));
  return { paths, fallback: false };
};

export default SingleProject;
