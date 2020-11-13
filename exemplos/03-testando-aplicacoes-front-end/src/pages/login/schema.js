export default {
  fields: [
    {
      type: 'email',
      name: 'email',
      placeholder: 'seu@email.com.br',
      validations: 'isEmail'
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
