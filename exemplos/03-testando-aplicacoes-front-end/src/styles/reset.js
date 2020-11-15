import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    font-family: arial;
    height: 100%;
  }

  body {
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.post.background};
    `}
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    vertical-align: baseline;
    box-sizing: border-box;
    z-index: 0;
    outline: none;
  }

  #root {
    ${({ theme }) => css`
      width: 1500px;
      max-width: 100%;
      margin: 0 auto;
      padding: ${theme.spacing.default};
    `}
  }
`;
