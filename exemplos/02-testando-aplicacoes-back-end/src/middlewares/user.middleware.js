import { isAdminMiddleware, validateDataMiddleware } from 'jsassertivo/src/middlewares/index.js';
import { getUserByUid } from 'jsassertivo/src/database/user/read.js';

export const getUserData = async (req, res, next) => {
  try {
    const user = await getUserByUid(req.cookies.uid);
    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }
}

export const validateToken = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Token inválido' })
    }

    return next();
  } catch (err) {
    return next(err);
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    isAdminMiddleware(req)
    return next();
  } catch ({ message }) {
    return res.status(401).json({ message })
  }
}

export const validateBody = fields => (req, res, next) => {
  try {
    const payload = {
      data: req.body
    }
    validateDataMiddleware(fields)(payload)

    return next();
  } catch ({ message }) {
    return res.status(400).json({ message })
  }
}

export default [
  getUserData,
  validateToken
];
