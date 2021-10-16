import tw, { styled, css } from 'twin.macro';

export const Wrapper = styled.div(() => [
  tw`container sticky top-0 py-2 shadow-md z-20 bg-gray-700 
    md:(py-6 mb-6)
    dark:(bg-gray-900 )

  `,
]);

export const Container = styled.div(() => [
  tw`
    px-4 mx-auto 
    md:(flex items-center justify-between) 
    lg:(max-w-7xl)
  `,
]);

export const NameLink = styled.a(() => [
  tw`font-medium tracking-wider transition-colors text-gray-300 uppercase rounded cursor-pointer inline-block mb-2 lg:(mb-0)
  hover:(text-sky-500) 
  focus:(text-sky-500 outline-none) 
  focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
  dark:(text-sky-200 hocus:(text-sky-300))
  `,
]);

export const SocialLinksWrapper = styled.div(() => [
  tw`flex space-x-4 font-medium 
  dark:(text-sky-200)
  
  `,

  css`
    & a {
      ${tw`
        transition-colors cursor-pointer text-gray-300
        hover:text-sky-500
        focus:(text-sky-500 outline-none) 
        focus-visible:(ring-2 ring-offset-2 ring-sky-500 ring-opacity-60 outline-none)
        dark:(text-sky-200 )
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

      ${tw`text-gray-300 hocus:(text-sky-500) dark:(text-sky-200 )`}
    }
  `,
]);

export const Bull = tw.div`text-gray-300`;
