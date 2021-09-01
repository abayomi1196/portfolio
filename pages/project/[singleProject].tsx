import type { NextPage } from 'next';
import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// @ts-ignore
import Fade from 'react-reveal/Fade';

import { projects } from 'sections/projects/projectData';

import { Layout } from 'sections';

import {
  Container,
  Wrapper,
  Title,
  ProjectLink,
  Description,
  StackList,
} from 'styles/singleProject.styled';

const SingleProject: NextPage = () => {
  const router = useRouter();
  const { singleProject } = router.query;

  const projectDetails = projects.find(
    (project) => project.title === singleProject
  );

  return (
    <Layout>
      <Wrapper>
        <Container>
          <Title>{projectDetails?.title}</Title>

          {projectDetails ? (
            <Image
              src={projectDetails.image}
              alt={projectDetails.title}
              width={1920}
              height={768}
              objectFit="cover"
            />
          ) : null}

          <p>
            <strong>Live: </strong>
            <ProjectLink
              href={projectDetails?.url}
              target="_blank"
              rel="noreferrer"
            >
              {projectDetails?.url}
            </ProjectLink>
          </p>

          {projectDetails?.github && (
            <p>
              <strong>Code: </strong>
              <ProjectLink
                href={projectDetails.github}
                target="_blank"
                rel="noreferrer"
              >
                {projectDetails.github}
              </ProjectLink>
            </p>
          )}

          <StackList>
            {projectDetails?.stack.map((tech, id) => (
              <li key={id}>{tech}</li>
            ))}
          </StackList>

          <Description>{projectDetails?.text}</Description>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default SingleProject;
