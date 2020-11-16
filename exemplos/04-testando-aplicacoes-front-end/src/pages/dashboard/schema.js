export const createSchema = ({ email, userName: username, password, name, lastName, role, avatar } = {}) => ({
  fields: [
    {
      type: 'text',
      name: 'email',
      placeholder: 'email',
      validations: 'isEmail',
      inputProps: {
        defaultValue: email,
      }
    },
    {
      type: 'text',
      name: 'userName',
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
    },
    {
      type: 'text',
      name: 'avatar',
      placeholder: 'http://site.com.br/imagem-de-perfil.jpg',
      inputProps: {
        defaultValue: avatar,
      }
    },
    {
      type: 'select',
      name: 'role',
      validations: 'isRequired',
      inputProps: {
        options: [
          { text: 'Usuário', value: 'USER' },
          { text: 'Administrador', value: 'ADMIN' },
        ],
        defaultValue: role
      }
    }
  ],
  submit: 'Confirmar',
  buttonProps: {
    type: 'green'
  }
});
