import { removeUser } from '../database/user/remove.js';
import logger from '../utils/logger.js';

import applyMiddlewares, {
  parseDataMiddleware,
  validateDataMiddleware,
  isAdminMiddleware
} from '../middlewares/index.js';

const remove = async ({ data }) => {
  try {
    const deletedUser = await removeUser(data.uid);
    logger.log(`Usuário ${deletedUser.name} removido com sucesso.`);
  } catch (err) {
    logger.error('Ocorreu um erro ao remover o usuário \n', err.message);
  }
}

export default applyMiddlewares(
  parseDataMiddleware,
  validateDataMiddleware(['uid']),
  isAdminMiddleware,
  remove
);