import styled, { css } from 'styled-components';

export const Logout = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: ${theme.spacing.onehalf};
    top: ${theme.spacing.onehalf};

    & > figure {
      width: ${theme.spacing.double};
      height: ${theme.spacing.double};
      border-radius: ${theme.radius.rounded};
      overflow: hidden;
    }

    & > *:not(:last-child) {
      margin-right: ${theme.spacing.default};
    }
  `}
`;

export const Greetings = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.post.color};
    margin-right: ${theme.spacing.default};
  `}
`;
