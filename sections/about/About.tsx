import { Wrapper, Container } from './About.styled';

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
              technologies: <span>HTML5 / CSS3</span>, <span>SASS</span>,
              <span>JavaScript ES6+</span>, <span>Typescript</span>,{' '}
              <span>React/Redux</span>, <span>Styled Components</span>,{' '}
              <span>TailwindCSS</span>, <span>NextJS</span> &amp;{' '}
              <span>Git and Github</span>. Currently interested in Javascript
              for backend web development &amp; learning the <span>MERN</span>{' '}
              stack specifically.
            </p>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
