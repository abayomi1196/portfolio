import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-20`;

export const Container = tw.div`
  max-w-4xl mx-auto px-4
`;

export const Title = styled.h2(() => [
  tw`text-gray-600 text-2xl my-5 lg:(text-3xl)`,

  css`
    & small {
      ${tw`inline-block text-sm lowercase px-3 py-1 bg-yellow-500 text-gray-200 rounded-full shadow-md`}
    }
  `,
]);

export const ProjectLink = tw.a`
    text-sky-700 my-2 inline-block mx-3
    transition-colors underline
    hover:(text-sky-500)
    focus:(text-sky-500 outline-none) 
    focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60        outline-none)
`;

export const Description = tw.p`
  mt-5 mb-2 text-gray-500 tracking-wide leading-6
`;

export const StackList = styled.ul(() => [
  tw`list-none my-3 flex flex-wrap gap-2`,

  css`
    & {
      margin-bottom: 50px;
    }
    & > li {
      ${tw`shadow-md bg-sky-200 text-gray-500 py-1 px-3 rounded-lg
      `}
    }
  `,
]);

export const ImageWrapper = styled.a(() => [
  tw`inline-block mt-5 rounded-md overflow-hidden`,

  css`
    & img {
      ${tw` transform hover:(scale-105) transition-all duration-300`}
    }
  `,
]);

export const Details = styled.div(() => [
  css`
    & h3 {
      ${tw`text-gray-600 text-2xl`}
    }

    & p {
      ${tw`text-gray-500 my-2  tracking-wide leading-6 mb-10`}
    }
  `,
]);

export const OtherProjects = styled.div(() => [
  tw`text-gray-500 mt-10 text-lg`,
  css`
    & {
      p {
        ${tw`flex gap-3`}
      }
      a {
        ${tw`
        font-bold text-sky-400  transition-colors underline
        hover:(text-sky-500)
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60      outline-none)
        `}
      }
    }
  `,
]);
