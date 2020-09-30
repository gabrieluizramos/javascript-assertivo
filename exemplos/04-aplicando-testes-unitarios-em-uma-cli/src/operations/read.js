import { getUserByUid } from '../database/user/read.js';

import logger from '../utils/logger.js';

export default async function read ({ data }) {
  try {
    const user = await getUserByUid(data);
    logger.log(`
      Dados do usuário: \n
      ------------------ \n
      '${JSON.stringify(user, null, 2)}'
    `);
  } catch (err) {
    logger.error('Ocorreu um erro ao ler os dados do usuário', err);
  }
};
