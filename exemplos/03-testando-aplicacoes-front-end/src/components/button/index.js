import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Button = ({ children, icon, ...props }) => {
  return (
    <S.Button  icon={icon} {...props}>
      {children && <span>{children}</span>}
      {icon}
    </S.Button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'blue',
    'red',
    'yellow',
    'green'
  ]),
  icon: PropTypes.node,
  iconType: PropTypes.oneOf([
    'start',
    'end'
  ]),
  round: PropTypes.bool
};

Button.defaultProps = {
  type: '',
  icon: null,
  iconType: 'start',
  round: false,
};

export default Button;
