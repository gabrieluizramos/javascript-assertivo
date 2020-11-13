// Middleware
import { getUserData, validateToken, isAdmin, validateBody } from 'middlewares/user.middleware';

// Utils
import { createReq, createRes, createNext, createUser, createError } from 'utils/create';

// Roles
import ROLES from '@jsassertivo/cli/src/constants/roles';

// Mock service
import service from 'services/user/find';
jest.mock('services/user/find');

afterEach(() => {
  jest.clearAllMocks();
});

describe('getUserData encontra as informações à partir de um uid', () => {
  it('Insere as informações encontradas no objeto da requisição', async () => {
    const user = createUser();
    const req = createReq({ cookies: { uid: user.uid } });
    const res = createRes();
    const next = createNext();

    service.uid.mockResolvedValueOnce(user);

    await getUserData(req, res, next);

    expect(service.uid).toHaveBeenCalledTimes(1);
    expect(service.uid).toHaveBeenCalledWith(user.uid);

    expect(req.user).toEqual(user);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it('Retorna uma mensagem de erro caso não encontre', async () => {
    const user = createUser();
    const req = createReq({ cookies: { uid: user.uid } });
    const res = createRes();
    const next = createNext();
    const error = createError('Erro ao consultar os dados');

    service.uid.mockRejectedValueOnce(error);

    await getUserData(req, res, next);

    expect(service.uid).toHaveBeenCalledTimes(1);
    expect(service.uid).toHaveBeenCalledWith(user.uid);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(error);
  });
});

describe('validateToken verifica se o token de um usuário é valido', () => {
  it('Continua caso seja', async () => {
    const user = createUser();
    const req = createReq({ user });
    const res = createRes();
    const next = createNext();

    await validateToken(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it('Retorna um erro caso não seja', async () => {
    const req = createReq();
    const res = createRes();
    const next = createNext();

    await validateToken(req, res, next);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expect.any(TypeError));
  });
});

describe('isAdmin verifica se a role é ADMIN', () => {
  it('Continua execução caso seja', () => {
    const user = createUser({ role: ROLES.ADMIN });
    const req = createReq({ user });
    const res = createRes();
    const next = createNext();

    isAdmin(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it('Retorna um erro caso não seja', () => {
    const user = createUser({ role: ROLES.USER });
    const req = createReq({ user });
    const res = createRes();
    const next = createNext();

    isAdmin(req, res, next);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
  });
});

describe('validateBody verifica se existem os campos presentes em req.body', () => {
  it('Continua a execução caso existam os valores', () => {
    const campo = 'qualquer';

    const req = createReq({ body: { [campo]: 'valor' } });
    const res = createRes();
    const next = createNext();

    validateBody([campo])(req, res, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });

  it('Retorna um erro caso os campos não existam', () => {
    const campo = 'qualquer';

    const req = createReq();
    const res = createRes();
    const next = createNext();

    validateBody([campo])(req, res, next);

    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(400);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) });

    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
  });
});
