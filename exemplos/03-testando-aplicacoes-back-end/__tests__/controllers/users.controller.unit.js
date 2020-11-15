// Controller
import { list } from 'controllers/users.controller';

// Utils
import { createReq, createRes, createUserList, createError } from 'utils/create';

// Mock Logger
import logger from '@jsassertivo/cli/src/utils/logger.js';
jest.mock('@jsassertivo/cli/src/utils/logger.js');

// Mock Service
import * as findUsers from 'services/users/find';
jest.mock('services/users/find');

it('Retorna uma lista de usuários', async () => {
  const req = createReq();
  const res = createRes();

  const users = createUserList()
  findUsers.findAll.mockResolvedValueOnce(users);

  await list(req, res);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith(users);
});

it('Retorna um erro caso não consiga listar usuários', async () => {
  const req = createRes();
  const res = createRes();

  const error = createError('Não foi possível listar usuários');
  findUsers.findAll.mockRejectedValueOnce(error);

  await list(req, res);

  expect(logger.error).toHaveBeenCalledTimes(1);
  expect(logger.error).toHaveBeenCalledWith(expect.any(String), error);

  expect(res.status).toHaveBeenCalledTimes(1);
  expect(res.status).toHaveBeenCalledWith(500);

  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({ message: error.message });
});
