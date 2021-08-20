import Link from 'next/link';
import { Container, Wrapper, NameLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <NameLink>Abayomi Ayodele</NameLink>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
