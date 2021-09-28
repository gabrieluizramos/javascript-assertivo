import React, { useState, useRef } from 'react';

import Button from './button';

import Input from './input';
import validators from './helpers/validators';

import * as S from './styles';

const Form = ({ schema, onSubmit: submit, disabled = true }) => {
  const fieldsWithValidations = schema.fields.filter(field =>  field.validations && field.validations.length);
  const [fields, setFields] = useState(
    fieldsWithValidations.reduce((validations, field) => ({...validations, [field.name]: false }), {})
  );

  const getFieldValue = field => formRef.current[field].value;

  const getFormValues = () => Object.keys(fields).reduce((acc, cur) => ({
      ...acc,
      [cur]: getFieldValue(cur)
    }), {});

  const onChangeField = (name, type) => value => {
    const validation = validators(type)(value);

    if (validation.hasError) {
      setFields(prevFields => ({
        ...prevFields,
        [name]: validation.message
      }));
    } else {
      setFields(prevFields => ({
        ...prevFields,
        [name]: true
      }));
    }
  };

  const validations = fieldsWithValidations.reduce((validations, field) => ({
    ...validations,
    [field.name]: onChangeField(field.name, field.validations)
  }), {});

  const formRef = useRef(null);

  const validateAllFields = () => Object.keys(validations).forEach(field => {
    validations[field](getFieldValue(field))
  });

  const allFieldsAreValid = () => {
    validateAllFields();
    return !Object.keys(fields).find(key => !fields[key] || typeof fields[key] === 'string');
  };

  const onSubmit = e => {
    e.preventDefault();
    if(!allFieldsAreValid() || disabled) return;

    submit(getFormValues());
  };

  return (
    <S.Form method="POST" onSubmit={onSubmit} ref={formRef} className="form">
      {schema.fields.map(({ type, name, label, placeholder, mask, inputProps }, index) => {
        const props = { type, name, id: name , placeholder, label, mask };

        if (validations[name]) {
          props.onChange = props.onBlur = (e) => validations[name](e.target.value);
        }

        const hasError = typeof fields[name] === 'string';
        if (hasError) {
          props.error = fields[name];
        }

        return (
          <Input
            {...props}
            {...inputProps}
            key={`input-field-${index}-${name}-${type}`}
          />
        )
      })}
      <Button disabled={disabled}>{schema.submit}</Button>
    </S.Form>
  );
}

export default Form;
