import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  html {
    /* give title some breathing room when we scroll towards them */
    scroll-padding-top: 120px;
  }

  * {
    -webkit-transition: background-color 500ms ease-in-out;
    -ms-transition: background-color 500ms ease-in-out;
    transition: background-color 500ms ease-in-out;
  }

  body {
    padding: 20px;
    display: flex;  
    justify-content: center;
    ${tw`bg-gray-700 dark:bg-gray-900 font-serif`}
  }

  /* svg styles */
  .cls-1{
    fill:#00c58e;
  }
  
  .cls-2{
    fill:#2f495e;
  }

  .cls-3{
    fill:#108775;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
