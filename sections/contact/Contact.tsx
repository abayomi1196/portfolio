// @ts-nocheck

import { Wrapper, Container } from './Contact.styled';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

import horseImg from 'public/horse.jpg';

const Contact = () => (
  <Wrapper>
    <Container>
      <div>
        <h3>Get In Touch.</h3>
        <p>
          I am currently looking for a new role as a{' '}
          <strong>Front End Developer</strong>. Please feel free to reach out if
          you are looking to fill a similar role or just want to gist.
          <span role="img" aria-label="waving emoji">
            👋
          </span>{' '}
        </p>

        <a href="mailto:samabayomi301@gmail.com">samabayomi301@gmail.com</a>
      </div>

      <div>
        <Fade left delay={500}>
          <Image
            src={horseImg}
            alt="Profile"
            placeholder="blur"
            className="rounded-full"
            objectFit="cover"
            width={200}
            height={200}
          />
        </Fade>
      </div>
    </Container>
  </Wrapper>
);

export default Contact;
