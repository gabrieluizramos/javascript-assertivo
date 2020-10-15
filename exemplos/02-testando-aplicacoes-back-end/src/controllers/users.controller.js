import logger from 'jsassertivo/src/utils/logger.js';

import findUser from '../services/user/find.js';

export const list = async (req, res) => {
  try {
    const data = await findUser.all();

    return res.json(data);
  } catch(err) {
    logger.error('Ocorreu um erro ao listar usuários', err);
    return res.status(500).json({ message: err.message });
  }
}
