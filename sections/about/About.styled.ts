import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-8 `;

export const Container = styled.div(() => [
  tw` max-w-4xl py-12 mx-auto`,

  css`
    & > div {
      ${tw`lg:px-4`}

      h1 {
        ${tw`
          leading-4 text-lg tracking-wider font-light text-gray-400 
          lg:(text-2xl) 
        `}
      }

      h2 {
        ${tw`
          text-sky-300 mt-10 mb-4 text-3xl 
          lg:(text-6xl)
          dark:(text-sky-400)  
        `}
      }

      h3 {
        ${tw`
            font-normal text-gray-300 mt-0.5 text-xl 
            lg:(text-4xl)
            dark:(text-gray-400)
          `}

        & > span {
          ${tw`text-sky-300 dark:(text-sky-500)`}
        }
      }

      & > div {
        ${tw`mt-12 text-gray-300 leading-7 `}

        p {
          line-height: 30px;
          word-spacing: 1.2px;
          ${tw`
            my-2 tracking-wide
            lg:(text-lg)
            dark:(text-gray-400)  
          `}
        }
      }
    }
  `,
]);

export const SkillsSection = styled.div(() => [
  tw`my-5 pl-5 lg:(flex space-x-20)`,

  css`
    & ul {
      ${tw`font-bold list-disc`}

      li {
        ${tw`my-2 tracking-wider text-sky-300 dark:(text-sky-400)`}
      }
    }
  `,
]);
