import styled, { css } from 'styled-components';

const activeState = {
  true: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
  false: () => css`
    opacity: 0;
    transform: translateY(10px);
  `
};

const types = {
  default: (theme) => css`
    background: ${theme.colors.terminal.blue.light};
    color: ${theme.colors.white};
  `,
  success: (theme) => css`
    background: ${theme.colors.terminal.green};
    color: ${theme.colors.white};
  `,
  warning: (theme) => css`
    background: ${theme.colors.terminal.yellow};
    color: ${theme.colors.black};
  `,
  error: (theme) => css`
    background: ${theme.colors.red};
    color: ${theme.colors.white};
  `,
}

export const Snackbar = styled.div`
  ${({ theme, active, type }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    max-width: 95%;
    margin: 0 auto;
    position: absolute;
    bottom: ${theme.spacing.quadruple};
    left: 0;
    right: 0;
    transition: ${theme.transition.default};
    border-radius: ${theme.radius.default};
    box-shadow: ${theme.shadow.default};
    background: ${theme.colors.white};
    padding: ${theme.spacing.default};
    opacity: 0;

    ${!!type && types[type](theme)};
    ${activeState[active](theme)};
  `}
`;


export const CloseButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: ${theme.spacing.half};
    color: currentColor;

    svg {
      width: 30px;
    }
  `}
`;

export const Message = styled.p`
`;
