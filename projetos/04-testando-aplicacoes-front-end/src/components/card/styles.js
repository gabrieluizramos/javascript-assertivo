import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme, spacing }) => css`
    overflow: hidden;
    border-radius: ${theme.radius.default};
    padding: ${!!spacing && theme.spacing[spacing]};
    box-shadow: ${theme.shadow.light};
    background: ${theme.colors.white};
  `}
`;
