import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import { QuestionMark as ProfileIcone } from '@styled-icons/open-iconic/QuestionMark';

const Avatar = ({ src, minimal }) => (
  <S.Figure minimal={minimal}>
    {!!src ? <img src={src} alt="avatar" /> : <ProfileIcone />}
  </S.Figure>
);

Avatar.propTypes = {
  src: PropTypes.string,
  minimal: PropTypes.bool
};

Avatar.defaultProps = {
  src: '',
  minimal: false
}

export default Avatar;
