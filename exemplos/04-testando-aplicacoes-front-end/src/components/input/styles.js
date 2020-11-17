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
    border: 1px solid ${theme.colors.post.color};
  `}
`;

export const Icon = styled.button`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.half};
    background: transparent;
    width: 35px;
    cursor: pointer;
    color: ${theme.colors.post.color};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    padding: ${theme.spacing.default};
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    padding: ${theme.spacing.default};
  `}
`;
