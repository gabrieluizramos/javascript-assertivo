import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import Input from '../input';
import validators from './validators';

const Form = ({
  schema,
  onSubmit: submit,
  disabled
}) => {
  const fieldsWithValidations = schema.fields.filter(field =>  field.validations && field.validations.length);
  const [values, setValues] = useState(schema.fields.reduce((fields, field, index) => ({ ...fields, [field.name]: schema.fields[index].inputProps?.defaultValue || '' }), {}));
  const [fieldsError, setFieldsError] = useState(
    fieldsWithValidations.reduce((validations, field, index) => ({...validations, [field.name]: !!schema.fields[index]?.inputProps?.defaultValue || false }), {})
  );

  const getFieldValue = field => values[field];

  const onChangeField = (name, type) => value => {
    const validation = validators(type)(value);

    setValues({
      ...values,
      [name]: value
    });

    if (validation.hasError) {
      setFieldsError(prevFields => ({
        ...prevFields,
        [name]: validation.message
      }));
    } else {
      setFieldsError(prevFields => ({
        ...prevFields,
        [name]: true
      }));
    }
  };

  const validations = fieldsWithValidations.reduce((validations, field) => ({
    ...validations,
    [field.name]: onChangeField(field.name, field.validations)
  }), {});

  const validateAllFields = () => Object.keys(validations).forEach(field => {
    validations[field](getFieldValue(field))
  });

  const allFieldsAreValid = () => {
    validateAllFields();
    const valid = !Object.keys(fieldsError).find(key => !fieldsError[key] || typeof fieldsError[key] === 'string');
    return valid;
  };

  const onSubmit = e => {
    e.preventDefault();
    if(!allFieldsAreValid() || disabled) return;

    submit(values);
  };

  return (
    <form method="POST" onSubmit={onSubmit} className="form">
      {
        schema.fields.map(({ type, name, label, placeholder, mask, inputProps = {} }, index) => {
          const { defaultValue, ...passedProps } = inputProps;
          const props = { type, name, id: name , placeholder, label, mask, ...passedProps };

          if (validations[name]) {
            props.onChange = props.onBlur = ({ target: { value } }) => validations[name](value);
          } else {
            props.onChange = ({ target }) => setValues({ ...values, [target.name]: target.value });
          }

          return (
            <Input
              {...props}
              error={fieldsError[name]}
              value={values[name]}
              key={`input-field-${index}-${name}-${type}`}
            />
          )
        })
      }
      <Button disabled={disabled} {...schema.buttonProps}>
        {schema.submit}
      </Button>
    </form>
  );
}

Form.defaultProps = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {}
};

export default Form;
