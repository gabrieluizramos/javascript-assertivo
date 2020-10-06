// Importa função a ser testada
import applyMiddlewares from 'middlewares/index.js';

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Deve retornar uma nova função que chama os demais middlewares ao ser executada', () => {
  const mid1 = jest.fn(data => data);
  const mid2 = jest.fn(data => data);

  const middlewaresAplicados = applyMiddlewares(mid1, mid2);

  expect(middlewaresAplicados).toEqual(expect.any(Function));
  expect(mid1).not.toHaveBeenCalled();
  expect(mid2).not.toHaveBeenCalled();

  const argumentos = 'dados';
  middlewaresAplicados(argumentos);

  expect(mid1).toHaveBeenCalledTimes(1);
  expect(mid1).toHaveBeenCalledWith(argumentos);
  expect(mid2).toHaveBeenCalledTimes(1);
  expect(mid2).toHaveBeenCalledWith(argumentos);
});
