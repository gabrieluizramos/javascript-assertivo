import styled, { css } from 'styled-components';

const sections = {
  light: (theme) => css`
    background: ${theme.colors.post.background};
  `
}

export const Section = styled.section`
  ${({ theme, light }) => css`
    ${!!light && sections.light(theme)}
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
    padding: ${theme.spacing.double};
  `};
`;
