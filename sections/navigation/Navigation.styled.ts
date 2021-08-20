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
  tw`font-medium tracking-wider transition-colors text-gray-900 uppercase rounded cursor-pointer
  hover:(text-sky-500) 
  focus:(text-sky-500 outline-none) 
  focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)`,
]);

export const SocialLinksWrapper = styled.div(() => [
  tw`flex space-x-4 font-medium text-gray-800`,

  css`
    & a {
      ${tw`
        transition-colors 
        hover:text-sky-500
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
        `}
    }
  `,
]);

export const Bull = tw.div`text-gray-300`;
