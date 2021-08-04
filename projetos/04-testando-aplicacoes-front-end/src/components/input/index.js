import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import types from './types';

const Input = ({ type, error, ...props }) => {
  const InputByType = types[type];
  return (
    <S.Wrapper>
      <InputByType {...props} />
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'select',
  ])
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
