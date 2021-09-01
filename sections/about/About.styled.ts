import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-8 `;

export const Container = styled.div(() => [
  tw`space-x-5 max-w-4xl py-12 mx-auto`,

  css`
    & > div {
      ${tw`lg:px-4`}

      h1 {
        ${tw`
          leading-4 text-lg tracking-wider mb-1 font-light text-gray-400 
          lg:(text-2xl) 
        `}
      }

      h2 {
        ${tw`font-bold text-gray-700 mb-2 text-3xl lg:(text-5xl)`}
      }

      h3 {
        ${tw`font-normal text-gray-500 mt-0.5 text-xl lg:(text-4xl)`}

        & > span {
          ${tw`text-sky-500`}
        }
      }

      & > div {
        ${tw`mt-12 text-gray-500 leading-7 `}

        p {
          ${tw`my-2 tracking-wide`}
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
        ${tw`my-2 tracking-wider text-sky-600`}
      }
    }
  `,
]);
