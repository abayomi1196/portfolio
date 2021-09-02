import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// @ts-ignore
import Fade from 'react-reveal/Fade';

import { projects } from 'sections/projects/projectData';

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
} from 'styles/singleProject.styled';

const SingleProject: NextPage = () => {
  const router = useRouter();
  const { singleProject } = router.query;

  const projectDetails = projects.find(
    (project) => project.slug === singleProject
  );

  return (
    <Layout>
      <Wrapper>
        <Container>
          <Fade bottom>
            <Title>
              {projectDetails?.title}{' '}
              {projectDetails?.inDevelopment && <small>In Development</small>}{' '}
            </Title>
          </Fade>

          <Fade bottom={500}>
            <Description>{projectDetails?.summary}</Description>
            <p>
              <span>
                <ProjectLink
                  href={projectDetails?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </ProjectLink>
              </span>

              {projectDetails?.github && (
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
            </p>
          </Fade>

          {projectDetails ? (
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
          ) : null}

          <Fade bottom delay={800}>
            <StackList>
              {projectDetails?.stack.map((tech, id) => (
                <li key={id}>{tech}</li>
              ))}
            </StackList>
          </Fade>

          <Details>
            <h3>Implementation</h3>
            <p>{projectDetails?.implementation}</p>
          </Details>

          <Details>
            <h3>Lessons Learned</h3>
            <p>{projectDetails?.lessonsLearned}</p>
          </Details>

          <OtherProjects>
            I also built:{' '}
            {projectDetails?.otherProjects.map((item) => (
              <Link href={item.link} key={item.link}>
                {item.name}
              </Link>
            ))}
          </OtherProjects>

          <Contact />
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default SingleProject;
