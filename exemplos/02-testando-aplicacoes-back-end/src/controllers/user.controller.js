import logger from 'jsassertivo/src/utils/logger.js';

// Services
import findUser, { basedOnQuery } from '../services/user/find.js';
import { createUser } from '../services/user/create.js'
import { removeUser } from '../services/user/remove.js'
import { updateUserByUid } from '../services/user/update.js'

export const list = async (req, res) => {
  try {
    const { by, param } = basedOnQuery(req.query);
    const data = await findUser[by](param);

    return res.json(data);
  } catch(err) {
    logger.error('Ocorreu um erro ao listar usuários', err);
    return res.status(500).json({ message: err.message });
  }
}

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (err) {
    logger.error('Ocorreu um erro ao criar usuário', err);
    return res.status(500).json({ message: error.message });
  }
}

export const update = async (req, res) => {
  try {
    const user = await updateUserByUid(req.body);
    return res.status(202).json({ user })
  } catch (err) {
    logger.error('Ocorreu um erro ao atualizar usuário', err);
    return res.status(500).json({ message: error.message });
  }
}

export const remove = async (req, res) => {
  try {
    const user = await removeUser(req.body.uid);
    return res.status(202).json({ user })
  } catch (err) {
    logger.error('Ocorreu um erro ao remover usuário', err);
    return res.status(500).json({ message: err.message });
  }
}
