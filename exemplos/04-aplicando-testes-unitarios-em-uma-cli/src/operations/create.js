import logger from '../utils/logger.js';

import applyMiddlewares, {
  parseDataMiddleware,
  validateDataMiddleware,
  isAdminMiddleware
} from '../middlewares/index.js';
import { createUser } from '../database/user/create.js';

const create = async ({ data }) => {
  try {
    const user = await createUser(data);
    logger.log(`
      Usuário criado com sucesso, os dados são: \n
      ----------------------------------------- \n
      '${JSON.stringify(user, null, 2)}'
    `)
  } catch (err) {
    logger.error('Ocorreu um erro ao criar usuário \n', err.message);
  }
}

export default applyMiddlewares(
  parseDataMiddleware,
  validateDataMiddleware(['email', 'password', 'userName', 'name', 'lastName']),
  isAdminMiddleware,
  create
);