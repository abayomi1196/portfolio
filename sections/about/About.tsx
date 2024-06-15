// @ts-nocheck

import { Wrapper, Container } from "./About.styled";
import { Element as ScrollElement } from "react-scroll";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <ScrollElement name='about'>
      <Wrapper>
        <Container>
          <div>
            <Fade top delay={500}>
              <h1>
                <span role='img' aria-label='waving emoji'>
                  👋
                </span>{" "}
                Hi there.
              </h1>
            </Fade>

            <Fade bottom>
              <h2>I&apos;m Ayo.</h2>
              <h3>
                Software <span>Engineer</span> based in Abuja, Nigeria.
              </h3>
            </Fade>

            <div>
              <Fade delay={500}>
                <p>
                  Enjoys solving real-world problems with clean, maintainable
                  code. Always looking to learn new skills and improve on
                  existing knowledge, hoping to contribute to making the world a
                  better place.
                </p>
              </Fade>
            </div>
          </div>
        </Container>
      </Wrapper>
    </ScrollElement>
  );
};

export default About;
