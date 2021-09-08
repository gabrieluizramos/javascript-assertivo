import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacing.default};
    font-size: ${theme.font.size.default};
    transition: .2s ease-in-out;
    border: 2px solid ${theme.colors.white};
    background: ${theme.colors.white};

    &:not([disabled]) {
      &:hover {
        background: transparent;
        color: ${theme.colors.white};
      }
    }

    &[disabled] {
      cursor: initial;
      background: ${theme.colors.post.color};
      border-color: ${theme.colors.post.color};
    }
    `}
`;
