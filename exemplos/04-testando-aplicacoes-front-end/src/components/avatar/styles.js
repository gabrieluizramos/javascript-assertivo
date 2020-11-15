import styled from 'styled-components';

export const Figure = styled.figure`
  & > * {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  svg {
    max-width: 100px;
  }
`;
