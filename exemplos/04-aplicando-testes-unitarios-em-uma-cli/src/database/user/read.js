import { loadDatabase } from '../file.js';

export const getUserByUid = async (uid) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.uid === uid);

  return user;
};

export const getUserByEmailAndPassword = async (username, password) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.userName === username && usr.password === password);

  return user;
};

export const authenticate = async ({ username, password }) => {
  const { token } = await getUserByEmailAndPassword(username, password);
  return token;
};
