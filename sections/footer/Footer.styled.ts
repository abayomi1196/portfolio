import tw, { styled, css } from 'twin.macro';

export const FooterWrapper = tw.div`container mt-24 pb-16`;

export const Container = tw.div`max-w-4xl px-4 mx-auto text-gray-500`;

export const Line = tw.div`pb-8 mb-2 border-t-2 border-gray-300`;

export const FooterContents = styled.div(() => [
  tw`
    flex flex-col justify-between
    lg:(flex-row)  
  `,

  css`
    & > div {
      ${tw`pt-2 space-x-6 font-medium lg:pt-0`}

      a {
        ${tw`
        transition-colors 
        hover:text-sky-500
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
        `}
      }
    }
  `,
]);
