import React, { useState } from 'react';

import { Eye as NotVisibleIcon } from '@styled-icons/entypo/Eye';
import { EyeWithLine as VisibleIcon } from '@styled-icons/entypo/EyeWithLine';

import * as S from '../styles';

const Password = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  const type = visible ? 'text' : 'password';
  const Icon = visible ? VisibleIcon : NotVisibleIcon;

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  return (
    <S.Fieldset>
      <S.Input type={type} {...props} />
      <S.Icon onClick={toggleVisibility}>
        <Icon />
      </S.Icon>
    </S.Fieldset>
  );
};

export default Password;
