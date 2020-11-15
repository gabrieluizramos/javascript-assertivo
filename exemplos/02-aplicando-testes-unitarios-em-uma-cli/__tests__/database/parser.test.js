// Importa funções a serem testadas
import { toJSON, toString } from 'database/parser.js'

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Converte string para objeto', () => {
  const objeto = {
    nome: 'qualquer'
  };
  const retornado = toString(objeto);

  expect(typeof retornado).toEqual('string');
  expect(retornado.includes('nome')).toEqual(true);
  expect(retornado.includes('qualquer')).toEqual(true);
});

it('Converte objeto para string', () => {
  const string = '{"nome": "qualquer"}';
  const retornado = toJSON(string);

  expect(typeof retornado).toEqual('object');
  expect(retornado.nome).toEqual('qualquer');
});
