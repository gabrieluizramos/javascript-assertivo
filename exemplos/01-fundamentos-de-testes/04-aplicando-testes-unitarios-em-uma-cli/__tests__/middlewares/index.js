import applyMiddlewares from 'middlewares/index.js';

it('Deve retornar uma nova função que chama os demais middlewares ao ser executada', () => {
  const mid1 = jest.fn(data => data);
  const mid2 = jest.fn(data => data);
  const argumentos = 'dados';

  const middlewaresAplicados = applyMiddlewares(mid1, mid2);

  expect(typeof middlewaresAplicados).toEqual('function');
  expect(mid1).not.toHaveBeenCalled();
  expect(mid2).not.toHaveBeenCalled();

  middlewaresAplicados(argumentos);

  expect(mid1).toHaveBeenCalledTimes(1);
  expect(mid1).toHaveBeenCalledWith(argumentos);
  expect(mid2).toHaveBeenCalledTimes(1);
  expect(mid2).toHaveBeenCalledWith(argumentos);

});
