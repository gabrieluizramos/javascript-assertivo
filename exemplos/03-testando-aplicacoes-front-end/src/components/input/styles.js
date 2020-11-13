import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.default};
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    margin-top: ${theme.spacing.half};
    color: ${theme.colors.red};
  `}
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => css`
    display: flex;
    border-radius: ${theme.radius.default};
    background: ${theme.colors.white};
    align-items: center;
  `}
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.half};
    width: 35px;
    cursor: pointer;
    color: ${theme.colors.terminal.blue.default};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    padding: ${theme.spacing.default};
  `}
`;
