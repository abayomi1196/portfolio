import {
  Container,
  FooterWrapper,
  FooterContents,
  Line,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Line />

        <FooterContents>
          <p>Built with Next.js, TailwindCSS and Styled Components</p>

          <div>
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
          </div>
        </FooterContents>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
