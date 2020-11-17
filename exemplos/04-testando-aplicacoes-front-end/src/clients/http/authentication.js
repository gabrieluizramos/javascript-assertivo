import baseClient from './config';

import endpoints from './endpoints';
import { setData } from '../storage';

export const logIn = async ({
  client = baseClient,
  username,
  password
}) => {
  const user = await client.post(endpoints.authentication, { username, password });
  setData(user);

  return user;
}
