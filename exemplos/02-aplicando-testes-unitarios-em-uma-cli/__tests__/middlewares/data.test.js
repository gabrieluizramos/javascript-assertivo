// Importa função a ser testada
import { validateDataMiddleware } from 'middlewares/data.js';

// Cria uma função de middleware com os campos pré-definidos
const middleware = validateDataMiddleware(['email']);

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Retorna os dados caso os campos sejam válidos', () => {
  const dados = {
    data: {
      email: 'qualquerEmail'
    }
  };
  const retorno = middleware(dados);

  expect(retorno).toEqual(dados);
});

it('Dispara um erro caso os campos não sejam válidos', () => {
  const dados = {};
  const retorno = () => middleware(dados);

  expect(retorno).toThrow();
});
