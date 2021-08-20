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

          <a
            href="https://twitter.com/SirKamara"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/AbayomiAyodele"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </SocialLinksWrapper>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
