import { loadDatabase } from '@jsassertivo/cli/src/database/file.js';

// Usa getUserByUid diretamente da CLI
import { getUserByUid, getUserByUsernameAndPassword } from '@jsassertivo/cli/src/database/user/read.js';

export const getUserByUsername = async (username) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.userName === username);

  if (!user) {
    throw new Error('Não existe usuário com username informado.');
  }

  return user;
}

export const getUserByEmail = async (email) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.email === email);

  if (!user) {
    throw new Error('Não existe usuário com email informado.');
  }

  return user;
}

const priorities = ['uid', 'email', 'username'];
export const basedOnQuery = (query) => {
  const foundPriority = priorities.find(priority => !!query[priority]);

  if (!foundPriority) throw new Error('Você precisa informar uid, email ou username para fazer uma busca');

  return {
    by: foundPriority,
    param: query[foundPriority]
  };
}

export default {
  uid: getUserByUid,
  email: getUserByEmail,
  username: getUserByUsername,
  usernameAndPassword: getUserByUsernameAndPassword
}
