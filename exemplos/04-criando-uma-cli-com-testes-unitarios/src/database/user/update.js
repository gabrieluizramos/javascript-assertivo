import { loadDatabase, saveDatabase } from '../file.js';

export const updateUserByUid = async ({ uid, ...information }) => {
  const users = await loadDatabase();
  const user = users.find(usr => usr.uid === uid);

  if (!user) {
    throw new Error(`Usuário com UID ${uid} não existe`);
  }

  const updatedUsers = users.map(usr => usr.uid === uid ? ({ ...usr, ...information}) : usr);

  await saveDatabase(updatedUsers);
}
