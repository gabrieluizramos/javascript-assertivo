import { removeUser } from '../database/user/remove.js';
import logger from '../utils/logger.js';

export default async function remove ({ data: uid }) {
  try {
    const deletedUser = await removeUser(uid);

    logger.log(`Usuário ${deletedUser.name} removido com sucesso.`);
  } catch (err) {
    logger.error('Ocorreu um erro ao remover o usuário', err);
  }
}
