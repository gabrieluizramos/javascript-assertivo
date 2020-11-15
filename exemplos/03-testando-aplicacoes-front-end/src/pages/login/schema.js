export default {
  fields: [
    {
      type: 'text',
      name: 'username',
      placeholder: 'usuario',
      validations: 'isRequired'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'sua senha super secreta',
      validations: 'isRequired'
    },
  ],
  submit: 'Entrar',
  buttonProps: {
    type: 'green'
  }
}
