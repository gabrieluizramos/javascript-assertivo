// Operação a ser testada
import { update } from 'operations/update.js';

// Mock da operação que salva dados no banco
import { updateUserByUid } from 'database/user/update.js';
jest.mock('database/user/update.js');

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
    email: 'qualquer@email.com'
  }
};

// Limpa as chamadas de funções após a execução de cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Atualiza dados do usuário e loga mensagem', async () => {
  updateUserByUid.mockResolvedValueOnce();

  await update(mockUser)

  expect(spies.success).toHaveBeenCalledTimes(1);
  expect(updateUserByUid).toHaveBeenCalledTimes(1);
  expect(updateUserByUid).toHaveBeenCalledWith(mockUser.data);
});

it('Exibe mensagem de erro ao falhar a atualização dos dados', async () => {
  updateUserByUid.mockRejectedValueOnce('error');

  await update(mockUser)

  expect(spies.error).toHaveBeenCalledTimes(1);
  expect(updateUserByUid).toHaveBeenCalledTimes(1);
  expect(updateUserByUid).toHaveBeenCalledWith(mockUser.data);
});
