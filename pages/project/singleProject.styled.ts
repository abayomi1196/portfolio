import tw from 'twin.macro';

export const Wrapper = tw.div`container px-4 mt-12`;

export const Container = tw.div`
  max-w-4xl mx-auto px-4
`;

export const Title = tw.h2`text-sky-500 text-3xl my-5`;

export const ProjectLink = tw.a`
text-sky-700 my-2
transition-colors 
hover:(text-sky-500 underline)
focus:(text-sky-500 outline-none) 
focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)`;

export const Description = tw.p`
  my-3
`;
