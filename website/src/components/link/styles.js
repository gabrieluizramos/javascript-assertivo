import styled, { css } from 'styled-components';

const colors = {
  red: (theme) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.white};
  `,
  blue: (theme) => css`
    background: ${theme.colors.terminal.blue.default};
    color: ${theme.colors.white};
  `,
  green: (theme) => css`
    background: ${theme.colors.terminal.green};
    color: ${theme.colors.white};
  `,
  disabled: (theme) => css`
    background: ${theme.colors.post.color};
    color: ${theme.colors.post.background};
    cursor: not-allowed;
  `
}

export const Link = styled.a`
  ${({ theme, color }) => css`
    transition: ${theme.transition.default};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.default};
    border-radius: ${theme.radius.half};
    text-align: center;

    ${color ? colors[color](theme) : colors.blue(theme)};

    &:hover {
      opacity: 0.9;
    }

    svg {
      width: ${theme.spacing.onehalf};
      margin-left: ${theme.spacing.default};
    }

    & + a {
      margin-left: ${theme.spacing.default};
    }

    @media (max-width: 1000px) {
      width: 100%;

      & + a {
        margin-left: 0;
        margin-top: ${theme.spacing.default};
      }
    }
  `}
`;
