import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 450px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    letter-spacing: 0.8px;
    margin-bottom: ${theme.spacing.default};
    padding: ${theme.spacing.default} ${theme.spacing.default} 0;
    color: ${theme.colors.post.color};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    text-align: center;
    letter-spacing: 0.8px;
    margin-bottom: ${theme.spacing.default};
    padding: ${theme.spacing.default} ${theme.spacing.default};
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
  form {
      display: flex;
      flex-direction: column;

      & > button {
        padding: ${theme.spacing.default};
      }
    }
  `}
`;
