import { useState, useEffect } from 'react';

import Image from 'next/image';
import { shuffleArray } from 'utils/shuffleArray';
import { useFontStatus } from 'utils/useFontStatus';
import { lightColors } from 'utils/colors';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight, RainbowCircle } from 'components';
import horseImg from 'public/horse.jpg';

import { Wrapper, Container } from './About.styled';

const About = () => {
  // detect font status before animation for proper positioning
  const isFontReady = useFontStatus();

  const [colors, setColors] = useState<string[]>([]);

  // shuffle colors & set them in state each time the component re-renders
  useEffect(() => {
    setColors(shuffleArray(lightColors));
  }, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <RoughNotationGroup show={isFontReady}>
            <h1>Hi there, I&apos;m Ayo.</h1>

            <div>
              <p>
                I love using{' '}
                <RainbowHighlight color={colors[1]}>
                  {'modern tools and technologies'}
                </RainbowHighlight>{' '}
                to create solutions that are simple, delightful and functional.
              </p>

              <p>
                I am a{' '}
                <RainbowHighlight color={colors[3]}>
                  front-end developer
                </RainbowHighlight>{' '}
                with growing experience in Computer Science &amp; Modern Web
                Development . I am particularly interested in{' '}
                <RainbowHighlight color={colors[0]}>
                  {'client-side web development'}
                </RainbowHighlight>
                .
              </p>
              <p>
                I’ve always enjoyed taking on challenges centered around
                frontend engineering and am well versed in{' '}
                <RainbowHighlight color={colors[3]}>
                  modern web standards
                </RainbowHighlight>{' '}
                i.e <span style={{ fontWeight: 'bold' }}>ES6+</span>,
                <span style={{ fontWeight: 'bold' }}>Typescript</span>,&amp;{' '}
                <span style={{ fontWeight: 'bold' }}>React/Redux</span> .
                Currently interested in Javascript for backend web development
                &amp; <span style={{ fontWeight: 'bold' }}>GraphQL</span>{' '}
                specifically.
              </p>

              <p>
                Through these experiences, I&apos;ve been privileged to
                contribute significantly to both small and large teams,
                impacting real world projects with my{' '}
                <RainbowHighlight color={colors[0]}>
                  flexibility
                </RainbowHighlight>{' '}
                and{' '}
                <RainbowHighlight color={colors[1]}>
                  dedication
                </RainbowHighlight>
                .
              </p>

              <p>
                I&apos;m currently looking for a new role.{' '}
                <RainbowCircle>
                  <a
                    href="https://drive.google.com/file/d/1cISCN2nfSivP6HqZ8uH6vH3ImI2fFfah/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    My CV?
                  </a>
                </RainbowCircle>
              </p>
            </div>
          </RoughNotationGroup>
        </div>

        <div>
          <Image
            src={horseImg}
            alt="Profile"
            placeholder="blur"
            priority={true}
            className="rounded-full "
            objectFit="cover"
            width={200}
            height={200}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
