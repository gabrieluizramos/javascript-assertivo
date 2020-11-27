import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Book = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  @media (max-width: 1000px) {
    width: 100%
  }
`;

export const About = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 65%;

    & > *:not(:last-child) {
      margin-bottom: ${theme.spacing.default};
    }

    @media (max-width: 1000px) {
      align-items: center;
      width: 100%;
      margin-bottom: ${theme.spacing.double};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.size.biggest};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size.big};
  `}
`;

export const Cover = styled.figure`
  ${({ theme }) => css`
    width: 280px;
    height: 380px;
    transform: rotateY(-10deg);
    transition: ${theme.transition.slow};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px 0 0 3px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      transition: ${theme.transition.slow};
    }

    &:before {
      width: 96%;
      height: 96%;
      background: linear-gradient(to right, #a0a0a0, ${theme.colors.post.color});
      background-size: 2px;
      background-repeat: repeat-x;
      z-index: -1;
      transform: translate(8px, 0);
    }

    &:after {
      width: 97%;
      height: 97%;
      z-index: -2;
      background: #44462b;
      transform: translate(10px, 0);
      box-shadow: ${theme.shadow.default};
    }

    &:hover {
      transform: rotateY(-15deg);

      &:before {
        transform: translate(13px, 0);
      }
      &:after {
        transform: translate(17px, 0);
      }
    }
  `}
`;
