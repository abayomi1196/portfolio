import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html {
    /* give title some breathing room when we scroll towards them */
    scroll-padding-top: 120px;
  }
  
  body {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
