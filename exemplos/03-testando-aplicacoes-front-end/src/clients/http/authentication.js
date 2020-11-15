import baseClient from './config';

import { setUserData } from '../user';

export const logIn = async ({
  client = baseClient,
  username,
  password
}) => {
  const user = await client.post('/auth/login', { username, password });
  setUserData(user);

  return user;
}
