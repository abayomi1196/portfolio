import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import {
  Container,
  Wrapper,
  NameLink,
  SocialLinksWrapper,
  Bull,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <NameLink>Abayomi Ayodele</NameLink>
        </Link>

        <SocialLinksWrapper>
          <ScrollLink
            activeClass="text-sky-500"
            to="about"
            offset={-50}
            smooth={true}
            duration={500}
          >
            <a href="#about">About</a>
          </ScrollLink>
          <Bull>&bull;</Bull>
          <ScrollLink
            activeClass="text-sky-500"
            to="projects"
            offset={-150}
            smooth={true}
            duration={500}
          >
            <a href="#projects">Projects</a>
          </ScrollLink>
        </SocialLinksWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
