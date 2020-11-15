import React from 'react';

import * as S from './styles';

import { QuestionMark as ProfileIcone } from '@styled-icons/open-iconic/QuestionMark';

const Avatar = ({ src }) => (
  <S.Figure>
    {!!src ? <img src={src} /> : <ProfileIcone />}
  </S.Figure>
);

export default Avatar;
