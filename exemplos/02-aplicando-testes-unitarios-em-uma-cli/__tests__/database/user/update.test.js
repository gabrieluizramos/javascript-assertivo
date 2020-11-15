// Importa função a ser testada
import { updateUserByUid } from 'database/user/update.js'

// Faz o mock do arquivo e das funções que salvam dados a base
import * as file from 'database/file.js';
jest.mock('database/path.js');
jest.mock('database/file.js');

// Cria um usuário mock
const mockUser = {
  uid: 'abc-123',
  name: 'usuario',
  lastName: 'qualquer'
};

// Limpa todas as funções de mock ao final de cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Atualiza dados do usuário com sucesso', async () => {
  const newData = {
    userNam: 'qualquerUsuario',
    email: 'qualquer@email'
  };

  const fullUser = {
    ...mockUser,
    ...newData
  };

  file.loadDatabase.mockResolvedValueOnce([mockUser]);

  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  const updatedUser = await updateUserByUid(fullUser);

  expect(updatedUser).toEqual(fullUser);
  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([fullUser]);
});

it('Dispara uma mensagem de erro caso o usuário informado não exista', async () => {
  expect.assertions(4);

  file.loadDatabase.mockResolvedValueOnce([]);

  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  try {
    await updateUserByUid(mockUser);
  } catch (err) {
    expect(file.loadDatabase).toHaveBeenCalledTimes(1);
    expect(file.saveDatabase).not.toHaveBeenCalled();
  }
});
