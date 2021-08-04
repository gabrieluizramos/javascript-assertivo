import React from 'react';
import { createPortal } from 'react-dom';

import { Close } from '@styled-icons/ionicons-outline/Close';

import PropTypes from 'prop-types';

import { useDisplayDelay } from '../../hooks';

import * as S from './styles';

const root = document.body;
const Snackbar = ({ children, type, onExit }) => {
  const { display, visible, remove } = useDisplayDelay({ onUnmount: onExit });

  const Snack =  (
    <S.Snackbar active={visible} type={type}>
      <S.Message>
        {children}
      </S.Message>
      <S.CloseButton onClick={remove}>
        <Close />
      </S.CloseButton>
    </S.Snackbar>
  );

  return display && createPortal(Snack, root);
};

Snackbar.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'success',
    'warning',
    'error',
  ]),
  onExit: PropTypes.func,
};

Snackbar.defaultProps = {
  type: 'default',
  onExit: () => {},
};

export default Snackbar;
