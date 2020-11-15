import styled, { css } from 'styled-components';

const withColors = {
  blue: (theme) => css`
    background: ${theme.colors.terminal.blue.default};
    border-color: ${theme.colors.terminal.blue.default};
    color: ${theme.colors.white};
  `,
  red: (theme) => css`
    background: ${theme.colors.red};
    border-color: ${theme.colors.red};
    color: ${theme.colors.white};
  `,
  yellow: (theme) => css`
    background: ${theme.colors.terminal.yellow};
    border-color: ${theme.colors.terminal.yellow};
    color: ${theme.colors.black};
  `,
  green: (theme) => css`
    background: ${theme.colors.terminal.green};
    border-color: ${theme.colors.terminal.green};
    color: ${theme.colors.white};
  `
};

const withIcon = {
  start: (theme) => css`
    flex-direction: row-reverse;

    span {
      margin-left: ${theme.spacing.half};
    }
  `,
  end: (theme) => css`
    span {
      margin-right: ${theme.spacing.half};
    }
  `
};

const disabledState = (theme) => css`
  background: ${theme.colors.post.color};
  border-color: ${theme.colors.post.color};
  cursor: not-allowed;
`;

export const Button = styled.button`
  ${({ theme, type, icon, iconType, round, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.post.color};
    padding: ${theme.spacing.half};
    cursor: pointer;
    background: ${theme.colors.white};
    position: relative;
    border-radius: ${round ? theme.radius.rounded : theme.radius.half};
    overflow: hidden;

    ${!!icon && !!iconType && withIcon[iconType](theme)};
    ${!!type && withColors[type](theme)};
    ${disabled && disabledState(theme)}

    svg {
      width: ${theme.spacing.onehalf};
    }

    &:after {
      transition: ${theme.transition.default};
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &:hover {
      &:after {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    &:active {
      &:after {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  `}
`;
