import { loadDatabase } from '../file.js';

export const getUserByUid = async (uid) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.uid === uid);

  if (!user) {
    throw new Error('Não existe usuário com uid informado.');
  }

  return user;
};

export const getUserByUsernameAndPassword = async (username, password) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.userName === username && usr.password === password);

  if (!user) {
    throw new Error('Credenciais incorretas ou usuário inexistente.');
  }

  return user;
};
