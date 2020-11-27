import styled, { css } from 'styled-components';

const colors = {
  red: (theme) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.9;
    }
  `,
  blue: (theme) => css`
    background: ${theme.colors.terminal.blue.default};
    color: ${theme.colors.white};

    &:hover {
      opacity: 0.9;
    }
  `,
}

export const Link = styled.a`
  ${({ theme, color }) => css`
    transition: ${theme.transition.default};
    display: inline-block;
    font-size: ${theme.font.size.medium};
    padding: ${theme.spacing.default};
    border-radius: ${theme.radius.half};

    ${color ? colors[color](theme) : colors.blue(theme)};

    @media (max-width: 800px) {
      text-align: center;
      width: 100%;
    }
  `}
`;
