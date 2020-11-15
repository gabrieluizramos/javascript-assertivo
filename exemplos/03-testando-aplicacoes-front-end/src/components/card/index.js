import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ children, ...props }) => {
  return (
    <S.Card {...props}>
      {children}
    </S.Card>
  )
};


Card.propTypes = {
  spacing: PropTypes.oneOf([
    '',
    'half',
    'default',
    'onehalf',
    'double',
    'triple',
    'quadruple'
  ]),
};

Card.defaultProps = {
  spacing: ''
};

export default Card;
