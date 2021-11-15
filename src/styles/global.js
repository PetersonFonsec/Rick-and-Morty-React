import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  app-root,
  body {
    align-items: center;
    background: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  }

  html,
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  main {
    flex: 1;
    max-width: ${({ theme }) => theme.grid};
    padding: 32px 18px;
    width: 100%;
  }

  button {
    border: none;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }
`;
