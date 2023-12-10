import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-color: #2e016d;
  --primary-background: #f3f5f9;

  --accent-color: #FFADB9;
  --black: #000000;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--black)
  }
`;
