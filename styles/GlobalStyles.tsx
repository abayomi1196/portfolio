import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html {
    /* give title some breathing room when we scroll towards them */
    scroll-padding-top: 120px;
  }
  
  body {
    padding: 20px;
    display: flex;
    justify-content: center;
    ${tw`dark:bg-gray-600`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
