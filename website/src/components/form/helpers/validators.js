/* eslint-disable */
const regexp = {
  email: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
};
/* eslint-disable */

// Messages
const NOT_FILLED = 'Este campo precisa ser preenchido';
const INVALID_EMAIL = 'Digite um email válido';

// Validators
const isRequired = value => !value.trim() && NOT_FILLED;
const isEmail = value => isRequired(value) ? NOT_FILLED : (!regexp.email.test(value) && INVALID_EMAIL)

const validators = { isRequired, isEmail };

const validate = type => (value = '') => {
  const validationFn = validators[type] || validators.isRequired;
  const error = validationFn(value);

  return {
    hasError: typeof error === 'string',
    message: error
  };
};

export default validate;
