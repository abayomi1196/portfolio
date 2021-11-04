import tw, { styled, css } from "twin.macro";

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
          text-sky-300 mt-10 mb-4 text-5xl font-custom
          lg:(text-8xl)
          dark:(text-sky-400)  
        `}
      }

      h3 {
        ${tw`
            font-normal text-gray-300 mt-0.5 text-xl font-custom
            lg:(text-4xl)
            dark:(text-gray-400)  
          `}

        & > span {
          ${tw`text-sky-300 dark:(text-sky-500)`}
        }
      }

      & > div {
        ${tw`mt-6 text-gray-400 leading-7 `}

        p {
          line-height: 30px;

          ${tw`
            my-2 tracking-wide
            lg:(text-lg)
            // dark:(text-gray-400)  
          `}

          &:last-of-type {
            margin-bottom: 20px;
          }
        }
      }
    }
  `,
]);

export const SkillsSection = styled.div(() => [
  tw`my-5 pl-5 lg:(flex space-x-20)`,

  css`
    & ul {
      ${tw`list-none flex flex-wrap gap-8 lg:(gap-12)`}

      li {
        ${tw`my-2 tracking-wider text-sky-200 dark:(text-gray-300)`}

        &:not(:first-of-type) {
          /* ${tw`ml-6 lg:(ml-12)`} */
        }
      }
    }
  `,
]);
