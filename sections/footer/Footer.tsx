import NowPlaying from "components/NowPlaying";
import {
  Container,
  FooterWrapper,
  FooterContents,
  Line
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <NowPlaying />
        <Line />

        <FooterContents>
          <p>Built with Next.js, TailwindCSS and Styled Components</p>

          <div>
            <a
              href='https://twitter.com/SirKamara'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>

            <a
              href='https://www.linkedin.com/in/abayomi-ayodele-77a565131/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>

            <a
              href='https://github.com/abayomi1196'
              target='_blank'
              rel='noreferrer'
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
