import { useState, useEffect } from 'react';

import Image from 'next/image';
import { shuffleArray } from 'utils/shuffleArray';
import { useFontStatus } from 'utils/useFontStatus';
import { lightColors } from 'utils/colors';
import { RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight, RainbowCircle } from 'components';
import jeanImg from 'public/jean.jpg';

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
                I have always been interested and intrigued by modern technology
                and web development specifically, and have spent a considerable
                period of time learning, understanding and building practical
                solutions that encompass both{' '}
                <RainbowHighlight color={colors[3]}>front-end</RainbowHighlight>{' '}
                and{' '}
                <RainbowHighlight color={colors[0]}>
                  {'back-end web development'}
                </RainbowHighlight>
                .
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
                    View my CV?
                  </a>
                </RainbowCircle>
              </p>
            </div>
          </RoughNotationGroup>
        </div>

        <div>
          <Image
            src={jeanImg}
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
