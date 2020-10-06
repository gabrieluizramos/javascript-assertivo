import { removeUser } from 'database/user/remove.js'
import * as file from 'database/file.js';

jest.mock('database/path.js');
jest.mock('database/file.js');

const mockUser = {
  uid: 'abc-123',
  name: 'usuario',
  lastName: 'qualquer'
};

afterEach(() => {
  jest.clearAllMocks();
});

it('Remove usuário com sucesso', async () => {
  file.loadDatabase.mockResolvedValueOnce([mockUser]);

  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  const removedUser = await removeUser('abc-123');

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([]);

  expect(removedUser).toEqual(mockUser);
});

it('Dispara uma mensagem de erro quando usuário não existe na base', async () => {
  expect.assertions(4);

  file.loadDatabase.mockResolvedValueOnce([]);

  expect(file.loadDatabase).not.toHaveBeenCalled();
  expect(file.saveDatabase).not.toHaveBeenCalled();

  try {
    await removeUser('abc-123');
  } catch (err) {
    expect(file.loadDatabase).toHaveBeenCalledTimes(1);
    expect(file.saveDatabase).not.toHaveBeenCalled();
  }
});
