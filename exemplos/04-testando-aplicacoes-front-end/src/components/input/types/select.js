import React from 'react';

import * as S from '../styles';

const Text = ({ options = [], ...props }) => {
  return (
    <S.Fieldset>
      <S.Select {...props}>
        {options.map(({ text, value }) => (
          <option key={`option-${text}`} value={value}>
            {text}
          </option>
        ))}
      </S.Select>
    </S.Fieldset>
  );
};

export default Text;
