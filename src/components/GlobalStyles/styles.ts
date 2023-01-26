import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    display: flex;
  }

  input, textarea, button {
    font-family: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
