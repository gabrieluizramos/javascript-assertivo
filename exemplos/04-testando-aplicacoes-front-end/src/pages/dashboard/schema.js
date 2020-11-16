export const createSchema = ({ email, userName: username, password, name, lastName } = {}) => ({
  fields: [
    {
      type: 'text',
      name: 'email',
      placeholder: 'email',
      validations: 'isEmail',
      inputProps: {
        defaultValue: email && email.toLowerCase(),
      }
    },
    {
      type: 'text',
      name: 'username',
      placeholder: 'usuario',
      validations: 'isRequired',
      inputProps: {
        defaultValue: username,
      }
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'sua senha super secreta',
      validations: 'isRequired',
      inputProps: {
        defaultValue: password,
      }
    },
    {
      type: 'text',
      name: 'name',
      placeholder: 'primeiro nome',
      validations: 'isRequired',
      inputProps: {
        defaultValue: name
      }
    },
    {
      type: 'text',
      name: 'lastName',
      placeholder: 'sobrenome',
      validations: 'isRequired',
      inputProps: {
        defaultValue: lastName,
      }
    }
  ],
  submit: 'Atualizar',
  buttonProps: {
    type: 'green'
  }
});
