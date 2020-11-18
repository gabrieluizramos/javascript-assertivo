import baseClient from './config';
import * as storage from '../storage';
import endpoints from './endpoints';

export const logIn = async ({
  client = baseClient,
  username,
  password
}) => {
  const user = await client.post(endpoints.authentication, { username, password });
  storage.setData({ data: user });

  return user;
};

export const logOut = storage.erase;
export const isLoggedIn = storage.hasData;
export const getLoggedUser = storage.getData;
