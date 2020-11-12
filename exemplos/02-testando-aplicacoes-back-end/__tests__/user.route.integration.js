// App com as rotas
import app from '../src/index';

// Factories
import { createUserListWithAdmin, clientHTTP, createUser } from 'utils/create';

// Mocks
import { loadDatabase } from 'jsassertivo/src/database/file.js';
jest.mock('jsassertivo/src/database/file.js');
jest.mock('jsassertivo/src/utils/logger.js');

const users = createUserListWithAdmin();
const [admin] = users;
loadDatabase.mockResolvedValue(users);

// Hooks e configuração
let server;
beforeAll(() => {
  server = app();
});

let client;
beforeEach(() => {
  client = clientHTTP.create(server);
});

afterAll(() => {
  server.close();
});

describe('/user', () => {
  describe('GET', () => {
    it('Tenta consultar usuários sem estar logado e retorna 401', async () => {
      const { response } = await client.get('/user');
      expect(response.status).toEqual(401);
    });

    it.each([
      ['username', users[1], 'userName'],
      ['email', users[1], 'email'],
      ['uid', users[1], 'uid'],
    ])('Consulta dados por %s ao estar autenticado', async (query, user, field) => {
      const authenticated = clientHTTP.authenticate(client, admin);
      const request = await authenticated.get(`/user?${query}=${user[field]}`);

      expect(request.status).toEqual(200);
      expect(request.data).toEqual(user);
    });
  });

  describe('POST', () => {
    it('Tenta cadastrar usuário sem estar logado e retorna 401', async () => {
      const { response } = await client.post('/user');
      expect(response.status).toEqual(401);
    });

    it('Tenta cadastrar usuário estando logado mas sem possuir a role ADMIN', async () => {
      const unauthorized = clientHTTP.authenticate(client, users[1]);
      const { response } = await unauthorized.post('/user');
      expect(response.status).toEqual(401);
    });

    it('Admin logado, tenta cadastrar usuário sem informar todos os dados', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const { email, password } = createUser();
      const newUser = { email, password };

      const { response } = await authorized.post('/user', newUser);

      expect(response.status).toEqual(400);
    });

    it('Admin logado, cria usuário com sucesso, informando todos os dados', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const { uid, ...newUser } = createUser();

      const request = await authorized.post('/user', newUser);

      expect(request.status).toEqual(201);
      expect(request.data).toMatchObject(newUser);
    });
  });

  describe('PATCH', () => {
    it('Tenta atualizar usuário sem estar logado e retorna 401', async () => {
      const { response } = await client.patch('/user');
      expect(response.status).toEqual(401);
    });

    it('Tenta atualizar usuário estando logado mas sem possuir a role ADMIN', async () => {
      const unauthorized = clientHTTP.authenticate(client, users[1]);
      const { response } = await unauthorized.patch('/user');
      expect(response.status).toEqual(401);
    });

    it('Admin logado, tenta atualizar dados de um usuário sem informar uid', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const { email, password } = createUser();
      const newInformation = { email, password };

      const { response } = await authorized.patch('/user', newInformation);

      expect(response.status).toEqual(400);
    });

    it('Admin logado, atualiza dados de um usuário ao informar uid e campos complementares', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const newData = createUser();
      const newInformation = {
        uid: users[1].uid,
        userName: newData.userName,
        password: newData.password
      };

      const request = await authorized.patch('/user', newInformation);

      expect(request.status).toEqual(202);
      expect(request.data).toEqual(expect.objectContaining(newInformation));
    });
  });

  describe('DELETE', () => {
    it('Tenta deletar usuário sem estar logado e retorna 401', async () => {
      const { response } = await client.delete('/user');
      expect(response.status).toEqual(401);
    });

    it('Tenta deletar usuário estando logado mas sem possuir a role ADMIN', async () => {
      const unauthorized = clientHTTP.authenticate(client, users[1]);
      const { response } = await unauthorized.delete('/user');
      expect(response.status).toEqual(401);
    });

    it('Admin logado, tenta deletar usuário sem informar uid', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const { response } = await authorized.delete('/user');

      expect(response.status).toEqual(400);
    });

    it('Admin logado, consegue deletar usuário ao informar uid', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const [, user] = users;
      const request = await authorized.delete('/user', { data: { uid: user.uid }});

      expect(request.status).toEqual(202);
      expect(request.data).toEqual(expect.objectContaining(user));
    });
  });
});
