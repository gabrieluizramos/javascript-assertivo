import styled, { css } from 'styled-components';

import { hideLabel } from '../../components/form/input/styles';

import messages from './messages';

export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.default};
    margin-bottom: ${theme.spacing.default};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.terminal.green};
    margin-bottom: ${theme.spacing.default};
  `}
`;

export const Newsletter = styled.section``;

export const Form = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    .form {
      flex: 2;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: -${theme.spacing.half};

      > * {
        margin: ${theme.spacing.half};
      }
    }

    label {
      ${hideLabel}
    }

    fieldset {
      flex: 5;
    }

    button {
      flex: 1.5;
    }

    ${theme.media.query.default} {
      flex-direction: column;

      fieldset,
      button {
        flex: initial;
        width: 100%;
      }
    }
  `}
`;

export const Message = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.double};
    font-size: ${theme.font.size.small};

    color: ${({ type }) => messages[type].color}
  `}
`;
