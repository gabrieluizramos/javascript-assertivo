import { loadDatabase, saveDatabase } from '../file.js';

export const removeUser = async uid => {
  const users = await loadDatabase();
  const user = users.find(user => user.uid === uid);

  if (!user) {
    throw new Error(`Usuário com UID ${uid} não existe`);
  }

  const filtered = users.filter(usr => usr.uid !== user.uid);
  await saveDatabase(filtered);

  return user;
}
