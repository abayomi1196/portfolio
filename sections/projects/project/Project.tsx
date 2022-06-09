import Image from "next/image";
import Link from "next/link";

import {
  Description,
  ImageWrapper,
  ProjectLink,
  Title,
  MoreLink
} from "./Project.styled";

const Project = ({
  title,
  slug,
  image,
  summary
}: {
  title: string;
  slug: string;
  image: string | StaticImageData;
  summary: string;
}) => {
  return (
    <div>
      <Link href={`/project/${slug}`} passHref>
        <ProjectLink className='group'>
          <ImageWrapper>
            <Image
              src={image}
              alt={title}
              width={1920}
              height={768}
              objectFit='cover'
            />
          </ImageWrapper>

          <Title>{title}</Title>

          <Description>{summary}</Description>

          <MoreLink>Read More</MoreLink>
        </ProjectLink>
      </Link>
    </div>
  );
};

export default Project;
