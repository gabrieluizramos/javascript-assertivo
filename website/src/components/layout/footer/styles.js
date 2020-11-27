import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacing.triple} 0;
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.colors.terminal.blue.default};

    a {
      color: inherit;
    }
  `};
`;
