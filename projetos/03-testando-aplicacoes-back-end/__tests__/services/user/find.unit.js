// Service
import { getUserByUsername, getUserByEmail, basedOnQuery } from 'services/user/find';

// Utils
import { createUser, createUserList } from 'utils/create';

// Mock database
import { loadDatabase } from '@jsassertivo/cli/src/database/file.js';
jest.mock('@jsassertivo/cli/src/database/file.js');

afterEach(() => {
  jest.clearAllMocks();
});

describe('getUserByUsername encontra um usuário por username', () => {
  it('Retorna um usuário ao encontrar', async () => {
    const userList = createUserList();
    const [user] = userList;

    loadDatabase.mockResolvedValueOnce(userList);

    const retorno = await getUserByUsername(user.userName);

    expect(retorno).toEqual(user);
  });

  it('Retorna um erro caso o usuário não seja encontrado', async () => {
    expect.assertions(1);

    try {
      const userList = createUserList();
      const user = createUser();

      loadDatabase.mockResolvedValueOnce(userList);

      await getUserByUsername(user.userName);
    } catch (err) {
      expect(err).toEqual(expect.any(Error));
    }
  });
});

describe('getUserByEmail encontra um usuário por email', () => {
  it('Retorna um usuário ao encontrar', async () => {
    const userList = createUserList();
    const [user] = userList;

    loadDatabase.mockResolvedValueOnce(userList);

    const retorno = await getUserByEmail(user.email);

    expect(retorno).toEqual(user);
  });

  it('Retorna um erro caso o usuário não seja encontrado', async () => {
    expect.assertions(1);

    try {
      const userList = createUserList();
      const user = createUser();

      loadDatabase.mockResolvedValueOnce(userList);

      await getUserByEmail(user.email);
    } catch (err) {
      expect(err).toEqual(expect.any(Error));
    }
  });
});

describe('basedOnQuery encontra uma função dentro de service', () => {
  it.each([
    ['uid', { uid: 'qualquer-uid' }],
    ['email', { email: 'qualquer@email.com' }],
    ['username', { username: 'usuario' }],
  ])('Retorna a função que consulta usuario por %s e seu valor', (fn, query) => {
    const { by, param } = basedOnQuery(query);

    expect(by).toEqual(fn);
    expect(param).toEqual(query[by]);
  });

  it('Dispara uma mensagem de erro caso não encontre nenhuma das três funções', () => {
    try {
      const query = { qualquer: 'query' };
      basedOnQuery(query);
    } catch (err) {
      expect(err).toEqual(expect.any(Error));
    }
  });
});
