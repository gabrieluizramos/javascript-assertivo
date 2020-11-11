// CLI Middlewares
import { isAdminMiddleware, validateDataMiddleware } from 'jsassertivo/src/middlewares/index.js';

// Services
import find from '../services/user/find.js';

export const getUserData = async (req, res, next) => {
  try {
    const user = await find.uid(req.cookies.uid);
    req.user = user;

    return next();
  } catch (err) {
    res.status(401).json({ error: 'Usuário não autenticado' });
    return next(err);
  }
}

export const validateToken = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Token inválido' });
    }

    return next();
  } catch (err) {
    return next(err);
  }
}

export const isAdmin = async (req, res, next) => {
  try {
    isAdminMiddleware(req);
    return next();
  } catch (err) {
    res.status(401).json({ message: err.message })
    return next(error);
  }
}

export const validateBody = fields => (req, res, next) => {
  try {
    const payload = {
      data: req.body
    };
    validateDataMiddleware(fields)(payload);

    return next();
  } catch (err) {
    res.status(400).json({ message: err.message })
    return next(err);
  }
}

export default [
  getUserData,
  validateToken
];
