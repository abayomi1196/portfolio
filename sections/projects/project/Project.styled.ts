import tw, { styled, css } from "twin.macro";

export const SingleProject = styled.div(() => [
  tw`
    block shadow-md p-5 transition-all drop-shadow-lg border-2 border-opacity-5 rounded-lg
    hover:(shadow-lg ) 
    focus:(outline-none) 
    focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
    `
]);

export const ImageWrapper = styled.div(() => [
  tw`mb-4 relative mx-[-20px] mt-[-20px] overflow-hidden rounded-lg`,

  css`
    & {
      img {
        ${tw` 
      transform
      transition-all
      duration-300
      group-hover:(scale-105) 
      group-focus:(scale-105)
    `}
      }
    }
  `
]);

export const Title = tw.h2`text-lg font-bold mb-2 text-gray-400 transition-all
group-hover:(text-gray-300)
dark:(text-gray-300 group-hover:(text-sky-200))
`;

export const StackList = styled.div(() => [
  tw`flex gap-3.5 mb-5`,
  css`
    & {
      span {
        ${tw`text-blue-300 opacity-30 text-xs uppercase`}
      }
    }
  `
]);

export const Description = tw.p`text-gray-400 line-clamp-5 mt-3 mb-1 transition-all
group-hover:(text-gray-300)
dark:(group-hover:(text-gray-300))`;

export const MoreLink = styled.p(() => [
  tw`mt-10 text-gray-400 flex gap-3.5 justify-end
  group-hover:(text-gray-400)
  `,
  css`
    & {
      svg {
        width: 24px;
        height: 24px;

        ${tw`hover:(text-blue-300)`}
      }
    }
  `
]);
