// Utilitários
import faker from 'faker';
import axios from 'axios';

// CLI
import { createUser as createUserCLI } from '@jsassertivo/cli/commands/user';
import ROLES from '@jsassertivo/cli/src/constants/roles';

// Express ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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

export const createNext = () => {
  const next = jest.fn();

  return next;
};

export const createError = (message = 'Ocorreu um erro ao executar operação') => {
  const error = new Error(message);
  return error;
};

// Usuários :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const createAuth = (extra) => {
  const auth = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...extra
  };
  return auth;
};

export const createUser = createUserCLI;

export const createUserList = (length = 10) => {
  const list = Array.from({ length }, createUser);

  return list;
};

export const createUserListWithAdmin = () => {
  const list = createUserList();
  list[0].role = ROLES.ADMIN;

  return list;
};

// Integração :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const responseHandler = response => response;
export const clientHTTP = {
  create: (server) => {
    const { port } = server.address();
    const baseURL = `http://localhost:${port}/api`;
    const client = axios.create({ baseURL });
    client.interceptors.response.use(responseHandler, responseHandler);

    return client;
  },
  authenticate: (client, user) => {
    const authenticated = client;
    authenticated.defaults.headers.cookie = `uid=${user.uid};`;

    return authenticated;
  },
};
