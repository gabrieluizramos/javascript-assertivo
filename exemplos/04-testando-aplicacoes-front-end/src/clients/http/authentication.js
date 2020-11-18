import baseClient from './config';

import * as storage from '../storage';

import endpoints from './endpoints';

export const logIn = async ({
  client = baseClient,
  username,
  password
}) => {
  const user = await client.post(endpoints.authentication, { username, password });
  storage.setData(user);

  return user;
}

export const logOut = storage.clearData;
export const isLoggedIn = storage.hasData;
export const getLoggedUser = storage.getData;
