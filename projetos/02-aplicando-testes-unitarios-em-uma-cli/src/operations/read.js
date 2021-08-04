import { getUserByUid } from '../database/user/read.js';

import logger from '../utils/logger.js';

import applyMiddlewares, { validateDataMiddleware } from '../middlewares/index.js';

export const read = async ({ data }) => {
  try {
    const user = await getUserByUid(data.uid);

    if (user) {
      logger.log(`
        Dados do usuário: \n
        ------------------ \n
        '${JSON.stringify(user, null, 2)}'
      `);
    } else {
      logger.error('Usuário inexistente');
    }
  } catch (err) {
    logger.error('Ocorreu um erro ao ler os dados do usuário \n', err.message);
  }
};

export default applyMiddlewares(
  validateDataMiddleware(['uid']),
  read
);
