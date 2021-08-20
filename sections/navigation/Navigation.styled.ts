import tw, { styled, css } from 'twin.macro';

export const Wrapper = styled.div(() => [
  tw`sticky top-0 z-20 bg-white md:(py-6 mb-6)`,
]);

export const Container = styled.div(() => [
  tw`
    px-4 mx-auto 
    md:(flex items-center justify-between) 
    lg:(max-w-4xl)
  `,
]);

export const NameLink = styled.a(() => [
  tw`font-medium tracking-wider transition-colors text-gray-900 uppercase rounded
  hover:(text-blue-500) 
  focus:(text-blue-500 outline-none) 
  focus-visible:(ring-2 ring-offset-2 ring-blue-500 ring-opacity-60 outline-none)`,
]);
