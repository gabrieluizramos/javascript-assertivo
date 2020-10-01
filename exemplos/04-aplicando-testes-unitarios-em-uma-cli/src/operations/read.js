import { getUserByUid } from '../database/user/read.js';

import logger from '../utils/logger.js';

import applyMiddlewares, {
  parseDataMiddleware,
  validateDataMiddleware
} from '../middlewares/index.js';

const read = async ({ data }) => {
  try {
    const user = await getUserByUid(data.uid);
    logger.log(`
      Dados do usuário: \n
      ------------------ \n
      '${JSON.stringify(user, null, 2)}'
    `);
  } catch (err) {
    logger.error('Ocorreu um erro ao ler os dados do usuário \n', err.message);
  }
};

export default applyMiddlewares(
  parseDataMiddleware,
  validateDataMiddleware(['uid']),
  read
);