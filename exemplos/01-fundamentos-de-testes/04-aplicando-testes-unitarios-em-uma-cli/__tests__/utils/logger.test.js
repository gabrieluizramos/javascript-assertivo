// Importa função a ser testada e as ROLES
import logger from 'utils/logger.js';

// Cria espiões para verificar as chamadas de console.log e console.error
const spies = {
  log: jest.spyOn(console, 'log').mockImplementation(),
  error: jest.spyOn(console, 'error').mockImplementation()
};

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
describe('Logger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Deve executar console.log ao chamar a função log', () => {
    logger.log('teste');
    expect(spies.log).toHaveBeenCalledTimes(1);
  });

  it('Deve executar console.log ao chamar a função success', () => {
    logger.success('teste');
    expect(spies.log).toHaveBeenCalledTimes(1);
  });

  it('Deve executar console.error ao chamar a função log', () => {
    logger.error('teste');
    expect(spies.error).toHaveBeenCalledTimes(1);
  });
});
