import { getUserByUid } from 'database/user/read.js';
import { loadDatabase } from 'database/file.js';

jest.mock('database/path.js');
jest.mock('database/file.js');

const mockUsuario = {
  uid: 'abc-1234',
  userName: 'nomeDeUsuario',
  name: 'nome',
  lastName: 'DeUsuario',
  email: 'email.nome@usuario.com',
  password: 'senhasupersecreta',
  role: 'USER'
};

loadDatabase.mockResolvedValue([mockUsuario]);

it('Encontra usuário quando encontra seu UID', async() => {
  expect.assertions(1);
  const usuario = await getUserByUid('abc-1234');
  expect(usuario).toEqual(mockUsuario);
});

it('Dispara um erro caso usuário não seja contrado', async() => {
  expect.assertions(1);
  try {
    await getUserByUid('uid-nao-existente');
  } catch (err) {
    expect(err.message).toEqual('Não existe usuário com uid informado.');
  }
});

it.skip('Deve conter pelo menos 1 asserção', async() => {
  expect.assertions(1);
  await Promise.resolve(1);
});
