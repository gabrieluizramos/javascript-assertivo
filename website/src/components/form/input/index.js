import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ type, label, error, ...props }) => (
  <S.Fieldset>
    {label && (
      <S.Label htmlFor={props.name}>{label}</S.Label>
    )}
    <S.Field type={type} {...props} id={props.id || props.name} />
    <S.Error>
      {error}
    </S.Error>
  </S.Fieldset>
);

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string
};

Input.defaultProps = {
  type: 'default',
  error: ''
};

export default Input;
