import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacing.default};
    font-size: ${theme.font.size.default};
    transition: .2s ease-in-out;
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.radius.half};
    background: ${theme.colors.white};

    &:not([disabled]) {
      &:hover {
        opacity: 0.9;
      }
    }

    &[disabled] {
      cursor: not-allowed;
      background: ${theme.colors.post.color};
      border-color: ${theme.colors.post.color};
    }
  `}
`;
