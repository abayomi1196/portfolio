import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-12`;

export const Container = styled.div(() => [
  tw`space-x-5 max-w-4xl items-start mx-auto lg:(flex space-y-24) `,

  css`
    & > div:first-of-type {
      ${tw`lg:px-4`}

      h1 {
        ${tw`text-2xl font-bold text-gray-900 lg:(text-4xl)`}
      }

      & > div {
        ${tw`mt-4 text-gray-800`}

        p {
          ${tw`my-2`}

          &:last-of-type {
            ${tw`my-4`}
          }

          a {
            ${tw`
                transition-colors 
                hover:text-sky-500
                focus:(text-sky-500 outline-none) 
                focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
            `}
          }
        }
      }
    }

    & > div:last-of-type {
      ${tw`flex-shrink-0 align-self['top'] mt-12 lg:(px-4 mt-0)`}

      img {
        border-radius: 100%;
      }
    }
  `,
]);
