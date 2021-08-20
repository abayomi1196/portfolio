import Image from 'next/image';
import Link from 'next/link';

import {
  Description,
  ImageWrapper,
  ProjectLink,
  Title,
  StackList,
} from './Project.styled';

const Project = ({
  url,
  title,
  stack,
  image,
  text,
}: {
  url: string;
  title: string;
  stack: string[];
  image: string;
  text: string;
}) => {
  return (
    <div className="shadow-2xl">
      <Link href={url} passHref>
        <ProjectLink className="group" target="_blank" rel="noreferrer">
          <ImageWrapper>
            <Image
              src={image}
              width={1920}
              height={960}
              alt={title}
              placeholder="blur"
              objectFit="cover"
            />
          </ImageWrapper>

          <Title>{title}</Title>

          <StackList>
            {stack.map((tech, id) => (
              <li
                key={id}
                className="bg-sky-200 rounded-lg py-2 px-4 inline-block mx-3"
              >
                {tech}
              </li>
            ))}
          </StackList>

          <Description>{text}</Description>
        </ProjectLink>
      </Link>
    </div>
  );
};

export default Project;
