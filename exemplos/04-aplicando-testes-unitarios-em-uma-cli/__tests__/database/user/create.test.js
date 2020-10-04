import { createUser } from 'database/user/create.js';
import * as file from 'database/file.js';
import ROLES from 'constants/roles.js'

jest.mock('database/file.js');
jest.mock('database/path.js');

const usuario = {
  email: 'qualquer@email.com',
  password: 'senha1234',
  userName: 'usuarioQualquer',
  name: 'Usuario',
  lastName: 'Qualquer'
};


beforeEach(() => {
  file.loadDatabase.mockResolvedValue([]);
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('Cria usuario corretamente', async () => {
  expect.assertions(4);
  const user = await createUser(usuario);

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.USER
  });
});


it('Cria usuario corretamente com role ADMIN', async () => {
  expect.assertions(4);
  const user = await createUser({ ...usuario, role: ROLES.ADMIN });

  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.ADMIN
  });
});
