// Controller
import { authenticate } from 'controllers/auth.controller';

// Utils
import { createReq, createRes, createAuth, createError } from 'utils/create';

// Mock Logger
import logger from 'jsassertivo/src/utils/logger.js';
jest.mock('jsassertivo/src/utils/logger.js');

// Mock Service
import findUser from 'services/user/find';
jest.mock('services/user/find');

afterEach(() => {
  jest.clearAllMocks();
});

it('Encontra o usuário e insere seu UID em cookie', async () => {
  const req = createReq({ body: createAuth() });
  const res = createRes();

  const uid = 'qualquer-uid-de-usuario';
  findUser.usernameAndPassword.mockResolvedValueOnce({
    uid
  });

  await authenticate(req, res);

  expect(findUser.usernameAndPassword).toHaveBeenCalledTimes(1);
  expect(findUser.usernameAndPassword).toHaveBeenCalledWith(req.body.username, req.body.password);

  expect(res.cookie).toHaveBeenCalledTimes(1);
  expect(res.cookie).toHaveBeenCalledWith('uid', uid);
  // poderia ter sido validado da seguinte forma
  // expect(res.cookie.mock.calls).toEqual([
  //   ['uid', uid]
  // ]);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({ uid });
  // poderia ter sido validado da seguinte forma
  // expect(res.json.mock.calls).toEqual([
  //   [{ uid }]
  // ]);
});

it('Dispara um erro e retorna 404 caso o usuário não seja encontrado', async () => {
  const req = createReq({ body: createAuth() });
  const res = createRes();

  const erro = createError('Usuário não existente');
  findUser.usernameAndPassword.mockRejectedValueOnce(erro);

  await authenticate(req, res);

  expect(findUser.usernameAndPassword).toHaveBeenCalledTimes(1);
  expect(findUser.usernameAndPassword).toHaveBeenCalledWith(req.body.username, req.body.password);

  expect(logger.error).toHaveBeenCalledTimes(1);
  expect(logger.error).toHaveBeenCalledWith(expect.any(String), erro);

  expect(res.status).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(404);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({ message: erro.message });
});
