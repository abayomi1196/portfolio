import Link from 'next/link';
import { Container, Wrapper } from './Navigation.styled';

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <a>Abayomi Ayodele</a>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
