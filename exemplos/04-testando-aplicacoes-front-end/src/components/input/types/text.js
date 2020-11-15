import React from 'react';

import * as S from '../styles';

const Text = ({ ...props }) => {
  return (
    <S.Fieldset>
      <S.Input {...props} />
    </S.Fieldset>
  );
};

export default Text;
