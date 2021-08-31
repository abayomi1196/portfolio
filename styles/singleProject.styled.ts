import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-12 mx-auto`;

export const Container = tw.div`
  max-w-4xl mx-auto px-4
`;

export const Title = tw.h2`text-sky-500 text-3xl my-5`;

export const ProjectLink = tw.a`
text-sky-700 my-2 inline-block
transition-colors 
hover:(text-sky-500 underline)
focus:(text-sky-500 outline-none) 
focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)`;

export const Description = tw.p`
  my-5
`;

export const StackList = styled.ul(() => [
  tw`list-none mt-2 flex flex-wrap gap-2`,

  css`
    & > li {
      ${tw`shadow-md bg-sky-200 text-gray-500 py-1 px-3 rounded-lg
      hover:(bg-sky-300 text-gray-100)
      `}
    }
  `,
]);
