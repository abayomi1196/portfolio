import tw, { styled, css } from 'twin.macro';

export const ProjectLink = styled.a(() => [
  tw`
    block shadow-sm p-5 transition-all
    hover:(shadow-md)
    focus:(outline-none) 
    focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
    
    `,
]);

export const ImageWrapper = styled.div(() => [
  tw`mb-4 rounded-lg relative`,

  css`
    & img {
      ${tw` 
      transform
      transition-all
      duration-300
      group-hover:(scale-105) 
      group-focus:(scale-105)
    `}
    }
  `,
]);

export const Title = tw.h2`text-lg font-bold mb-3 text-gray-500 transition-all
group-hover:(text-gray-600)
dark:(text-sky-300 group-hover:(text-sky-400))
`;

export const Description = tw.p`text-gray-400 line-clamp-2 my-3 transition-all
group-hover:(text-gray-500)
dark:(group-hover:(text-gray-300))`;

export const MoreLink = tw.p`
  mt-5 text-gray-400
  group-hocus:(text-sky-500 underline) 
`;
