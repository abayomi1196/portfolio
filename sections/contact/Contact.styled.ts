import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-8`;

export const Container = styled.div(() => [
  tw` max-w-4xl py-12 mx-auto items-start lg:(flex gap-24)`,

  css`
    & > div:first-of-type {
      > h3 {
        ${tw`
          text-3xl text-sky-200 font-custom
          lg:(text-4xl)
          dark:(text-blue-200)
          `}
      }

      > p {
        ${tw`
          mt-3 text-base text-gray-400
          lg:(text-lg) 
          dark:(text-gray-500)
        `}

        & > strong {
          ${tw`text-sky-400`}
        }
      }

      a {
        ${tw`
          mt-5 text-sky-500 inline-block
          hocus:(text-sky-300 underline) 
          dark:(hocus:(text-sky-100))
        `}
      }
    }

    & > div:last-of-type {
      ${tw`mt-20 flex-shrink-0 lg:(mt-0)`}

      img {
        ${tw`rounded-full`}
      }
    }
  `,
]);
