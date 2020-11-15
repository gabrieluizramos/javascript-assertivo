// Importa função a ser testada e também as ROLES
import { createUser } from 'database/user/create.js';
import ROLES from 'constants/roles.js'

// Faz o mock do arquivo e das funções que salvam dados a base
import * as file from 'database/file.js';
jest.mock('database/file.js');
jest.mock('database/path.js');

// Cria um usuário mock
const usuario = {
  email: 'qualquer@email.com',
  password: 'senha1234',
  userName: 'usuarioQualquer',
  name: 'Usuario',
  lastName: 'Qualquer'
};

// Ajusta o valor que a função loadDatabase deve retornar antes de cada função
beforeEach(() => {
  file.loadDatabase.mockResolvedValue([]);
});

// Limpa mocks apos cada teste finalizar
afterEach(() => {
  jest.clearAllMocks();
});

// Restaura mocks apos os testes terminarem
afterAll(() => {
  jest.restoreAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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
