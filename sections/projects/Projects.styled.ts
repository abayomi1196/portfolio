import tw, { styled, css } from "twin.macro";

export const Wrapper = tw.div`container px-4 my-20`;

export const Container = tw.div`max-w-4xl mx-auto`;

export const Title = tw.h3`text-3xl text-sky-200 font-custom
lg:(text-5xl)
dark:(text-blue-200)
`;

export const SubTitle = tw.h4`mt-2 text-base text-gray-400
lg:(text-xl)
dark:(text-gray-500)
`;

export const ProjectsContainer = styled.div(() => [
  tw`mt-5 py-10 space-y-8
  sm:(grid grid-cols-2 gap-4 space-y-0) lg:(gap-5) xl:(gap-10)`
]);
