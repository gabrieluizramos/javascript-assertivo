import styled, { css } from 'styled-components';

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 300px;
    letter-spacing: 0.8px;

    & > figure {
      width: 100%;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      background: ${theme.colors.post.color};

      & > * {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
      }

      svg {
        max-width: 100px;
      }
    }
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacing.default};
    border-bottom: 1px solid ${theme.colors.post.color};
    text-align: center;
    font-weight: bold;
  `}
`;

export const Information = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.default};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-bottom: ${theme.spacing.half};
    }

    & > * {
      display: block;
    }
  `}
`;

export const Title = styled.b`
  ${({ theme }) => css`
    color: ${theme.colors.terminal.blue.default};
  `}
`;

export const Data = styled.span`
  text-transform: lowercase;
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.post.color};
    padding: ${theme.spacing.default};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `}
`;
