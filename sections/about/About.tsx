// @ts-nocheck

import { Wrapper, Container, SkillsSection } from "./About.styled";
import { Element as ScrollElement } from "react-scroll";
import Fade from "react-reveal/Fade";

import NuxtLogo from "public/nuxt-js.svg";
import JavascriptLogo from "public/javascript.svg";
import TypescriptLogo from "public/typescript.svg";
import ReactLogo from "public/react-js.svg";
import NextLogo from "public/next-js.svg";
import VueLogo from "public/vue.svg";

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
                Front End <span>Developer</span> based in Abuja, Nigeria.
              </h3>
            </Fade>

            <div>
              <Fade delay={500}>
                <p>
                  A software engineer who enjoys solving real-world problems
                  with clean, maintainable code. Always looking to learn new
                  skills and improve on existing knowledge, hoping to contribute
                  to making the world a better place.
                </p>

                <p>
                  By dedicating a lot of my free time to learning and practice,
                  collaborating on freelance projects & growing professional
                  experience, i&apos;ve been able to gain a solid understanding
                  of the following technologies:
                  <SkillsSection>
                    <ul>
                      <li>
                        <JavascriptLogo />
                      </li>
                      <li>
                        <TypescriptLogo />
                      </li>
                      <li>
                        <ReactLogo />
                      </li>
                      <li>
                        <NextLogo />
                      </li>
                      <li>
                        <VueLogo />
                      </li>
                      <li>
                        <NuxtLogo />
                      </li>
                    </ul>
                  </SkillsSection>
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
