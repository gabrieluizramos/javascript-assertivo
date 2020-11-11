import faker from 'faker';
import { createUser as generateUserCommand } from 'jsassertivo/commands/user';

export const createReq = (extra) => {
  const req = {
    body: {},
    query: {},
    ...extra
  };
  return req;
};

export const createRes = (extra) => {
  const res = {
    json: jest.fn(() => res),
    cookie: jest.fn(() => res),
    status: jest.fn(() => res),
    ...extra
  };
  return res;
};

export const createAuth = (extra) => {
  const auth = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...extra
  };
  return auth;
};

export const createUser = generateUserCommand;

export const createUserList = (length = 10) => {
  const list = Array.from({ length }, createUser);

  return list;
};

export const createError = (message = 'Ocorreu um erro ao executar operação') => {
  const error = new Error(message);
  return error;
};
