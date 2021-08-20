import tw, { styled, css } from 'twin.macro';

export const ProjectLink = styled.a(() => [
  tw`
    text-gray-800 block
    focus:(text-sky-500 outline-none) 
    focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
`,
]);

export const ImageWrapper = styled.div(() => [tw`mb-4 relative rounded-lg`]);

export const Title = tw.h2`text-lg font-bold mb-3 group-hover:text-sky-500`;

export const Description = tw.p`text-gray-800 mt-3 mb-10`;

export const StackList = styled.ul(() => [
  tw`list-none m-0 flex flex-wrap gap-2`,

  css`
    & > li {
      ${tw`shadow-md text-gray-500 py-1 px-3 rounded-full
      hover:(bg-sky-300 text-gray-100)
      `}
    }
  `,
]);
