import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html {
    /* give title some breathing room when we scroll towards them */
    scroll-padding-top: 120px;
  }
  
  body {
    font-family: 'Inter';
    padding: 20px;
  }

  /**
   * The highlight option of the rough-notation package can sometimes bleed
   * over adjacent words making them unreadable. Use a negative z-index to
   * place the highlight svg below text.
   */
  .rough-annotation {
    z-index: -1
  }

  .polka-bg-white {
    background-image: 
      radial-gradient(rgba(255,255,255,.15) 1px transparent 1px);
    background-position: 50%;
    background-size: 20px 20px;
  }

  .polka-bg-gray {
    background-image: radial-gradient(#e4e4e7 1px, transparent 1px);
    background-position: 50%;
    background-size: 20px 20px;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
