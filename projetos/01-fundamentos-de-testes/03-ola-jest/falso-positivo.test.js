const { falsoPositivo } = require('./falso-positivo');

it('retorna um texto qualquer', () => {
  expect(falsoPositivo()).toEqual(expect.any(String));
});
