import React from 'react';

import * as S from '../styles';

const Text = ({ options = [], ...props }) => {
  return (
    <S.Fieldset>
      <S.Select {...props}>
        {options.map(option => (
          <option value={option.value}>
            {option.text}
          </option>
        ))}
      </S.Select>
    </S.Fieldset>
  );
};

export default Text;
