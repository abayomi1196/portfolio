import Image from 'next/image';
import Link from 'next/link';

import {
  Description,
  ImageWrapper,
  ProjectLink,
  Title,
  MoreLink,
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
  image: string | StaticImageData;
  text: string;
}) => {
  return (
    <div>
      <Link href={`/project/${title}`} passHref>
        <ProjectLink className="group">
          <ImageWrapper>
            <Image src={image} alt={title} layout="fill" objectFit="contain" />
          </ImageWrapper>

          <Title>{title}</Title>

          <Description>{text}</Description>

          <MoreLink>View More</MoreLink>
        </ProjectLink>
      </Link>
    </div>
  );
};

export default Project;
