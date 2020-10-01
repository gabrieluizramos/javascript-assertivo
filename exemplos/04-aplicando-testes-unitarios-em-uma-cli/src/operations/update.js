import logger from '../utils/logger.js';

import applyMiddlewares, {
  parseDataMiddleware,
  validateDataMiddleware,
  isAdminMiddleware
} from '../middlewares/index.js';


import { updateUserByUid } from '../database/user/update.js';

const update = async ({ data }) => {
  try {
    await updateUserByUid(data);
    logger.success('Dados do usuário atualizados com sucesso');
  } catch (err) {
    logger.error('Ocorreu um erro ao atualizar dados do usuário \n', err.message);
  }
};

export default applyMiddlewares(
  parseDataMiddleware,
  validateDataMiddleware(['uid']),
  isAdminMiddleware,
  update
);
