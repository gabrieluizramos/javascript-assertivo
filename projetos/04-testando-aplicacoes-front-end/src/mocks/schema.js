export default {
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Nome',
      placeholder: 'Seu nome',
      validations: 'isRequired'
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'seu.email.mais@top.com',
      validations: 'isEmail'
    },
  ],
  submit: 'Assinar'
};
