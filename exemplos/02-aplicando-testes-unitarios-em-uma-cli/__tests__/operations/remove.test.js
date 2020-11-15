// Operação a ser testada
import { remove } from 'operations/remove.js';

// Mock da operação que salva dados no banco
import { removeUser } from 'database/user/remove.js';
jest.mock('database/user/remove.js');

// Espiona o logger
import logger from 'utils/logger.js';
const spies = {
  success: jest.spyOn(logger, 'success').mockImplementation(),
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
it('Loga dados do usuário removido da base com sucesso', async () => {
  removeUser.mockResolvedValueOnce(mockUser);

  await remove(mockUser);

  expect(logger.success).toHaveBeenCalledTimes(1);
  expect(removeUser).toHaveBeenCalledTimes(1);
  expect(removeUser).toHaveBeenCalledWith(mockUser.data.uid);
});

it('Loga mensagem de erro caso não consiga remover usuário da base', async () => {
  removeUser.mockRejectedValueOnce('error');

  await remove(mockUser);

  expect(logger.error).toHaveBeenCalledTimes(1);
  expect(removeUser).toHaveBeenCalledTimes(1);
  expect(removeUser).toHaveBeenCalledWith(mockUser.data.uid);
});
