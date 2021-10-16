import tw, { styled, css } from 'twin.macro';

export const Wrapper = tw.div`container px-4 my-20`;

export const Container = tw.div`max-w-4xl mx-auto`;

export const Title = tw.h3`text-2xl font-bold text-sky-200 
lg:(text-3xl)
dark:(text-sky-100)
`;

export const SubTitle = tw.h4`mt-2 text-base text-gray-400
lg:(text-xl)
dark:(text-gray-400)
`;

export const ProjectsContainer = styled.div(() => [
  tw`mt-5 py-10 
  sm:(grid grid-cols-2 gap-2) lg:(gap-5) xl:(gap-10)`,
]);
