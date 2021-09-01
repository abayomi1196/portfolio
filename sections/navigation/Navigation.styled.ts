import tw, { styled, css } from 'twin.macro';

export const Wrapper = styled.div(() => [
  tw`container sticky top-0 py-2 shadow-sm z-20 bg-white md:(py-6 mb-6)`,
]);

export const Container = styled.div(() => [
  tw`
    px-4 mx-auto 
    md:(flex items-center justify-between) 
    lg:(max-w-4xl)
  `,
]);

export const NameLink = styled.a(() => [
  tw`font-medium tracking-wider transition-colors text-gray-600 uppercase rounded cursor-pointer inline-block mb-2 lg:(mb-0)
  hover:(text-sky-500) 
  focus:(text-sky-500 outline-none) 
  focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)`,
]);

export const SocialLinksWrapper = styled.div(() => [
  tw`flex space-x-4 font-medium text-gray-700`,

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
