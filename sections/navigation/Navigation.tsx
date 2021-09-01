import Link from 'next/link';
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
          <Link href="/#about">About</Link>
          <Bull>&bull;</Bull>
          <Link href="/#projects">Projects</Link>
        </SocialLinksWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
