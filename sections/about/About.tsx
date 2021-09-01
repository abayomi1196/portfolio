import { Wrapper, Container, SkillsSection } from './About.styled';

const About = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <h1>Hello world. I&apos;m</h1>

          <h2>Abayomi Ayodele.</h2>
          <h3>
            Front End <span>Developer</span> based in Abuja, Nigeria.
          </h3>

          <div>
            <p>
              I am a software developer with growing expertise in modern web
              development and design. I&apos;ve been particularly privileged
              early on in my career to collaborate on both small and large
              teams, impacting real world projects and learning immensely from
              the experience.
            </p>
            <p>
              By dedicating a lot of my free time to learning and practice,
              collaborating on freelance projects & professional experience,
              i&apos;ve been able to gain a solid understanding of the following
              technologies:
              <SkillsSection>
                <ul>
                  <li>HTML5+ / CSS3</li>
                  <li>JavaScript ES6+</li>
                  <li>SASS</li>
                </ul>
                <ul>
                  <li>React / Redux</li>
                  <li>Styled Components</li>
                  <li>TailwindCSS</li>
                </ul>
                <ul>
                  <li>Typescript</li>
                  <li>NextJS</li>
                  <li>Git and Github</li>
                </ul>
              </SkillsSection>
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
