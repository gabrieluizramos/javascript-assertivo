export default {
  fields: [
    {
      type: 'text',
      name: 'FNAME',
      label: 'Nome',
      placeholder: 'Seu nome',
      validations: 'isRequired'
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'seu.melhor@email.com',
      validations: 'isEmail'
    },
  ],
  submit: 'Assinar'
};
