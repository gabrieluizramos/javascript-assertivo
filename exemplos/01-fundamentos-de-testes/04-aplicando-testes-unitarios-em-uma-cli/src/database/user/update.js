import { loadDatabase, saveDatabase } from '../file.js';

export const updateUserByUid = async ({ uid, ...information }) => {
  const users = await loadDatabase();
  const user = users.find(usr => usr.uid === uid);

  if (!user) {
    throw new Error(`Usuário com UID ${uid} não existe`);
  }

  const updatedUser = {
    ...user,
    ...information
  };

  const updatedUsers = users.map(usr => usr.uid === uid ? updatedUser : usr);

  await saveDatabase(updatedUsers);

  return updatedUser;
}
