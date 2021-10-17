import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-20`;

export const Container = tw.div`
  max-w-4xl mx-auto lg:(px-4) 
`;

export const Title = styled.h2(() => [
  tw`
    text-gray-200 text-2xl my-5 
    lg:(text-4xl)
    dark:(text-gray-300)
    `,

  css`
    & small {
      ${tw`
        inline-block text-sm lowercase px-3 py-1 bg-yellow-500 text-gray-200 rounded-full shadow-md`}
    }
  `,
]);

export const ProjectLinksWrapper = styled.p(() => [
  css`
    & > span:not(:first-of-type) {
      margin-left: 20px;
    }
  `,
]);

export const ProjectLink = styled.a(() => [
  tw`
  text-sky-400 my-2 inline-block mb-12
  transition-colors underline
  hover:(text-sky-500)
  focus:(text-sky-500 outline-none) 
  focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60   outline-none)
  dark:(text-sky-300 hocus:(text-gray-200))
  `,
]);

export const Description = styled.p(() => [
  tw`
  my-5 text-gray-400 tracking-wider leading-7
  dark:(text-gray-400)
  `,
]);

export const StackList = styled.ul(() => [
  tw`list-none mt-3 mb-12 flex flex-wrap gap-5`,

  css`
    & {
      margin-bottom: 50px;
    }

    & > li {
      ${tw`
        shadow-md bg-sky-200 text-gray-500 py-1 px-3 rounded-lg
        dark:(text-gray-600)
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
      ${tw`text-gray-300 mb-4 text-2xl dark:(text-gray-300)`}
    }

    & p {
      ${tw`text-gray-400 my-2 tracking-wide leading-6 mb-10
        dark:(text-gray-400)
      `}
    }
  `,
]);

export const OtherProjects = styled.div(() => [
  tw`text-gray-300 my-24 text-lg dark:(text-gray-300)`,
  css`
    & {
      a {
        ${tw`
        text-sky-400 inline-block mx-2 my-1 transition-colors underline
        hover:(text-sky-500)
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
        dark:(text-sky-300 hocus:(text-gray-200))
        `}
      }
    }
  `,
]);
