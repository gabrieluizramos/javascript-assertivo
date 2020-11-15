// App com as rotas
import app from '../src/index';

// Factories
import { createUserListWithAdmin, clientHTTP, createUser } from 'utils/create';

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

describe('/auth/login', () => {
  describe('POST', () => {
    it('Não consegue logar usuário com dados inválidos', async () => {
      const { userName: username, password } = createUser();
      const user = { username, password };
      const { response } = await client.post('/auth/login', user);

      expect(response.status).toEqual(404);
    });

    it('Realiza o login de um usuário com dados válidos', async () => {
      const user = {
        username: admin.userName,
        password: admin.password
      };
      const request = await client.post('/auth/login', user);
      const [cookie] = request.headers['set-cookie'];

      expect(request.status).toEqual(200);
      expect(admin).toEqual(expect.objectContaining(request.data));
      expect(cookie).toEqual(expect.stringContaining(admin.uid));
    });
  });
});
