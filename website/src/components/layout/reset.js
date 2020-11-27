import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    html,
    body{
      background: ${theme.colors.black};
      color: ${theme.colors.post.color};
      font-family: 'Fira Code', monospace, arial;
      line-height: 1.8;
    }

    h3 {
      font-size: ${theme.font.size.big};
      margin-bottom: ${theme.spacing.double};
    }

    p:not(:last-child) {
      margin-bottom: ${theme.spacing.double};
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
  `}
`;
