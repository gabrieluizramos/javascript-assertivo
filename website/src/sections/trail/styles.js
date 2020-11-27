import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    text-align: center;

    & > * {
      margin-bottom: ${theme.spacing.default};
    }
  `}
`;

export const TrailList = styled.ol`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing.triple} auto 0;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 100%;
      background: ${theme.colors.post.color};
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;

      @media (max-width: 800px) {
        z-index: -1;
      }
    }
  `}
`;

export const TrailItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    counter-increment: item;
    width: 100%;
    border-radius: 5px;
    position: relative;

    @media (max-width: 800px) {
      &:not(:last-child) {
        margin-bottom: ${theme.spacing.double};
      }
    }

    &:nth-child(odd) {
      & > div {
        align-self: flex-start;

        &:after {
          right: 0;
        }

        @media (max-width: 800px) {
          align-self: initial
        }
      }
    }

    &:nth-child(even) {
      & > div {
        align-self: flex-end;

        &:after {
          left: 0;
        }

        @media (max-width: 800px) {
          align-self: initial
        }
      }
    }

    &:nth-child(1) {
      b {
        color: ${theme.colors.red};
      }
    }

    &:nth-child(2) {
      b {
        color: ${theme.colors.terminal.green};
      }
    }

    &:nth-child(3) {
      b {
        color: ${theme.colors.terminal.yellow};
      }
    }

    &:nth-child(4) {
      b {
        color: ${theme.colors.terminal.blue.default};
      }
    }

    &:nth-child(5) {
      b {
        color: ${theme.colors.terminal.purple};
      }
    }
  `}
`;

export const TrailContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.default} ${theme.spacing.triple};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    text-align: center;
    width: 50%;
    background: ${theme.colors.post.background};

    & > * {
      margin: ${theme.spacing.default} auto 0;
    }

    &:before {
      content: counter(item);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${theme.font.size.big};
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid currentColor;
      font-weight: bold;
      background: ${theme.colors.post.background};
      z-index: 1;
    }

    &:after {
      content: '';
      display: block;
      height: 2px;
      width: 48%;
      background: ${theme.colors.post.color};
      position: absolute;
      top: 15%;

      @media (max-width: 800px) {
        display: none;
      }
    }

    @media (max-width: 800px) {
      padding: ${theme.spacing.default} 0;
      width: 100%;
    }
  `}
`;


export const TrailTitle = styled.b`
  ${({ theme }) => css`
    color: ${theme.colors.post.color};
    font-size: ${theme.font.size.big};
    display: block;
  `}
`;

export const TrailDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.post.color};
  `}
`;
