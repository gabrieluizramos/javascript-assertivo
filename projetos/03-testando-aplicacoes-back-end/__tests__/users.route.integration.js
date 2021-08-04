// App com as rotas
import app from '../src/index';

// Factories
import { createUserListWithAdmin, clientHTTP } from 'utils/create';

// Mocks
import { loadDatabase } from '@jsassertivo/cli/src/database/file.js';
jest.mock('@jsassertivo/cli/src/database/file.js');
jest.mock('@jsassertivo/cli/src/utils/logger.js');

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

describe('/users', () => {
  describe('GET', () => {
    it('Tenta listar dados de usuários sem autenticação e retorna 401', async () => {
      const { response } = await client.get('/users');
      expect(response.status).toEqual(401);
    });

    it('Consegue listar dados de usuários com autenticação', async () => {
      const authorized = clientHTTP.authenticate(client, admin);
      const request = await authorized.get('/users');

      expect(request.status).toEqual(200);
      expect(request.data).toEqual(users);
    });
  });
});
