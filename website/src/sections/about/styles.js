import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.figure`
  ${({ theme }) => css`
    min-width: 200px;
    height: 200px;
    border: 2px solid ${theme.colors.post.color};
    border-radius: 50%;
    overflow: hidden;
    background: url(https://fotografia.gabrieluizramos.com.br/images/crow.thumb.webp) no-repeat center center;
    background-size: cover;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: ${theme.transition.default};
    }

    &:hover img {
      opacity: 0;
    }
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.triple};

    @media (max-width: 800px) {
      margin-left: 0;
      margin-top: ${theme.spacing.triple};
    }
  `}
`;

export const Name = styled.b`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.size.medium};
  `}
`;
export const Username = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.terminal.green};
    display: block;
    font-size: ${theme.font.size.small};
    margin-bottom: ${theme.spacing.default};
  `}
`;
