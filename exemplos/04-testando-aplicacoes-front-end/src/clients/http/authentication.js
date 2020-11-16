import baseClient from './config';

import { setData } from '../storage';

export const logIn = async ({
  client = baseClient,
  username,
  password
}) => {
  const user = await client.post('/auth/login', { username, password });
  setData(user);

  return user;
}
