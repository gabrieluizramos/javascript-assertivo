// Controller
import { list, create, update, remove } from 'controllers/user.controller';

// Utils
import { createReq, createRes, createUser, createError } from 'utils/create'

// Mock Logger
import logger from '@jsassertivo/cli/src/utils/logger.js';
jest.mock('@jsassertivo/cli/src/utils/logger.js');

// Mock services
import * as findUserService from 'services/user/find';
import * as createUserService from 'services/user/create';
import * as removeUserService from 'services/user/remove';
import * as updateUserUservice from 'services/user/update';
jest.mock('services/user/find');
jest.mock('services/user/create');
jest.mock('services/user/remove');
jest.mock('services/user/update');

afterEach(() => {
  jest.clearAllMocks();
});

describe('Lista usuário', () => {
  it('Retorna um usuário com sucesso', async () => {
    const user = createUser();
    const req = createReq({ query: { uid: user.uid } });
    const res = createRes();

    const by = 'uid';
    const param = req.query.uid;
    findUserService.basedOnQuery.mockReturnValueOnce({ by, param });
    findUserService.default.uid.mockResolvedValueOnce(user);

    await list(req, res);

    expect(findUserService.basedOnQuery).toHaveBeenCalledTimes(1);
    expect(findUserService.basedOnQuery).toHaveBeenCalledWith(req.query);

    expect(findUserService.default.uid).toHaveBeenCalledTimes(1);
    expect(findUserService.default.uid).toHaveBeenCalledWith(req.query.uid);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it('Retorna uma mensagem de erro', async () => {
    const error = createError();
    const user = createUser();
    const req = createReq({ query: { uid: user.uid } });
    const res = createRes();

    const by = 'uid';
    const param = req.query.uid;
    findUserService.basedOnQuery.mockReturnValueOnce({ by, param });
    findUserService.default.uid.mockRejectedValueOnce(error);

    await list(req, res);

    expect(findUserService.basedOnQuery).toHaveBeenCalledTimes(1);
    expect(findUserService.basedOnQuery).toHaveBeenCalledWith(req.query);

    expect(findUserService.default.uid).toHaveBeenCalledTimes(1);
    expect(findUserService.default.uid).toHaveBeenCalledWith(req.query.uid);

    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(expect.any(String), error);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: error.message });
  });
});

describe('Cria usuário', () => {
  it('Cria usuário com sucesso', async () => {
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    createUserService.createUser.mockResolvedValueOnce(user);

    await create(req, res);

    expect(createUserService.createUser).toHaveBeenCalledTimes(1);
    expect(createUserService.createUser).toHaveBeenCalledWith(req.body);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it('Retorna uma mensagem de erro', async () => {
    const error = createError('Ocorreu um erro ao criar usuário');
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    createUserService.createUser.mockRejectedValueOnce(error);

    await create(req, res);

    expect(createUserService.createUser).toHaveBeenCalledTimes(1);
    expect(createUserService.createUser).toHaveBeenCalledWith(req.body);

    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(expect.any(String), error);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: error.message });
  });
});

describe('Atualiza usuário', () => {
  it('Atualiza usuário com sucesso', async () => {
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    updateUserUservice.updateUserByUid.mockResolvedValueOnce(user);

    await update(req, res);

    expect(updateUserUservice.updateUserByUid).toHaveBeenCalledTimes(1);
    expect(updateUserUservice.updateUserByUid).toHaveBeenCalledWith(req.body);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(202);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it('Retorna uma mensagem de erro', async () => {
    const error = createError('Ocorreu um erro ao atualizar usuario');
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    updateUserUservice.updateUserByUid.mockRejectedValueOnce(error);

    await update(req, res);

    expect(updateUserUservice.updateUserByUid).toHaveBeenCalledTimes(1);
    expect(updateUserUservice.updateUserByUid).toHaveBeenCalledWith(req.body);

    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(expect.any(String), error);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: error.message });
  });
});

describe('Remove usuário', () => {
  it('Remove usuário com sucesso', async () => {
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    removeUserService.removeUser.mockResolvedValueOnce(user);

    await remove(req, res);

    expect(removeUserService.removeUser).toHaveBeenCalledTimes(1);
    expect(removeUserService.removeUser).toHaveBeenCalledWith(user.uid);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(202);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it('Retorna uma mensagem de erro', async () => {
    const error = createError('Ocorreu um erro ao remover usuario');
    const user = createUser();
    const req = createReq({ body: user });
    const res = createRes();

    removeUserService.removeUser.mockRejectedValueOnce(error);

    await remove(req, res);

    expect(removeUserService.removeUser).toHaveBeenCalledTimes(1);
    expect(removeUserService.removeUser).toHaveBeenCalledWith(user.uid);

    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(logger.error).toHaveBeenCalledWith(expect.any(String), error);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: error.message });
  });
});
