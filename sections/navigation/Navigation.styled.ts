import tw, { styled, css } from 'twin.macro';

export const Wrapper = styled.div(() => [
  tw`container sticky top-0 py-2 shadow-sm z-20 bg-white 
    md:(py-6 mb-6)
    dark:(bg-gray-600 drop-shadow)

  `,
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
  focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
  dark:(text-sky-200 hocus:(text-sky-300))
  `,
]);

export const SocialLinksWrapper = styled.div(() => [
  tw`flex space-x-4 font-medium text-gray-600 
  dark:(text-sky-200)
  
  `,

  css`
    & a {
      ${tw`
        transition-colors cursor-pointer
        hover:text-sky-500
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
        `}
    }
  `,
]);

export const ThemeWrapper = styled.div(() => [
  css`
    & svg {
      height: 20px;
      width: 20px;
      cursor: pointer;
      margin-left: 20px;

      ${tw`hocus:(text-sky-500)`}
    }
  `,
]);

export const Bull = tw.div`text-gray-300`;
