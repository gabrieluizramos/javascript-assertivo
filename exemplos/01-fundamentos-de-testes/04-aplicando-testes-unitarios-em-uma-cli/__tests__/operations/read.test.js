// Operação a ser testada
import { read } from 'operations/read.js';

// Mock da operação que salva dados no banco
import { getUserByUid } from 'database/user/read.js';
jest.mock('database/user/read.js');

// Espiona o logger
import logger from 'utils/logger.js';
const spies = {
  log: jest.spyOn(logger, 'log').mockImplementation(),
  error: jest.spyOn(logger, 'error').mockImplementation(),
};

// Mocka o path do arquivo database
jest.mock('database/path.js');

// Mock qualquer de usuário
const mockUser = {
  data: {
    name: 'Qualquer',
    lastName: 'Usuario',
    email: 'qualquer@email.com',
    uid: 'abc-123',
  }
};

// Limpa as chamadas de funções após a execução de cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Loga usuário ao consultar com sucesso', async () => {
  getUserByUid.mockResolvedValueOnce(mockUser.data);

  await read(mockUser);

  expect(spies.log).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledWith(mockUser.data.uid);
});

it('Loga erro caso usuário não exista', async () => {
  getUserByUid.mockResolvedValueOnce(null);

  await read(mockUser);

  expect(spies.error).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledWith(mockUser.data.uid);
});

it('Loga erro caso não consiga dados de usuário', async () => {
  getUserByUid.mockRejectedValueOnce('error');

  await read(mockUser);

  expect(spies.error).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledTimes(1);
  expect(getUserByUid).toHaveBeenCalledWith(mockUser.data.uid);
});
