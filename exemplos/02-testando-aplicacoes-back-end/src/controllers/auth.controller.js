import logger from 'jsassertivo/src/utils/logger.js';

// Services
import findUser from '../services/user/find.js'

export const authenticate = async (req, res) => {
  try {
    const { uid } = await findUser.usernameAndPassword(req.body.username, req.body.password);
    res.cookie('uid', uid);

    return res.json({ uid });
  } catch(err) {
    logger.error('Ocorreu um erro ao autenticar usuários', err);
    return res.status(404).json({ message: 'Usuário não existente' });
  }
}
