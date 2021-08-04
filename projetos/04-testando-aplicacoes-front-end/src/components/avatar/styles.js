import styled, { css } from 'styled-components';

const minimalAvatar = theme => css`
  width: ${theme.spacing.double};
  height: ${theme.spacing.double};
  border-radius: ${theme.radius.rounded};
  overflow: hidden;

  svg {
    width: ${theme.spacing.default};
  }
`;

export const Figure = styled.figure`
  ${({ theme, minimal }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    background: ${theme.colors.post.color};
    width: 100%;
    max-width: 300px;
    height: 250px;

    & > * {
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    svg {
      max-width: 100px;
    }

    ${minimal && minimalAvatar(theme)};
  `}
`;
