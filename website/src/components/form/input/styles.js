import styled, { css } from 'styled-components';

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

export const hideLabel = `
  height: 0;
  padding: 0;
  margin: 0;
  width: 0;
  opacity: 0;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.half};
    cursor: pointer;
  `}
`;

export const Field = styled.input`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    background: ${theme.colors.terminal.black};
    padding: ${theme.spacing.default};
    color: ${theme.colors.white};
    font-size: ${theme.font.size.default};
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.radius.half};
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    margin: ${theme.spacing.half} 0;
    font-size: ${theme.font.size.small};
    color: ${theme.colors.terminal.yellow};
  `}
`;
