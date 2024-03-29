import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    
  html,
  body {
      font-family: ${({ theme }) => theme.fontFamily};
      margin: 0;
      padding: 0;
  }
    
  body {
      align-items: center;
      background: ${({ theme }) => theme.background};
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      width: 100%;
  }

  #root {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    width: 100%;
  }

  main {
    flex: 1;
    max-width: ${({ theme }) => theme.grid};
    min-height: 100vh;
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
