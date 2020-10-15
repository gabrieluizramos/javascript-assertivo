import { getUserByUsernameAndPassword } from 'jsassertivo/src/database/user/read.js'
import logger from 'jsassertivo/src/utils/logger.js';

export const authenticate = async (req, res) => {
  try {
    const { uid } = await getUserByUsernameAndPassword(req.body.username, req.body.password);
    res.cookie('uid', uid);

    return res.json({ uid });
  } catch(err) {
    logger.error('Ocorreu um erro ao autenticar usuários', err);
    return res.status(500).json(err);
  }
}
