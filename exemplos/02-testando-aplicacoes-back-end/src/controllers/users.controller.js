import logger from '@jsassertivo/cli/src/utils/logger.js';

// Services
import { findAll } from '../services/users/find.js';

export const list = async (req, res) => {
  try {
    const data = await findAll();

    return res.json(data);
  } catch(err) {
    logger.error('Ocorreu um erro ao listar usuários', err);
    return res.status(500).json({ message: err.message });
  }
}
