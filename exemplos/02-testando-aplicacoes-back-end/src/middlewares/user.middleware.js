// CLI Middlewares
import { isAdminMiddleware, validateDataMiddleware } from '@jsassertivo/cli/src/middlewares/index.js';

// Services
import find from '../services/user/find.js';

export const getUserData = async (req, res, next) => {
  try {
    const user = await find.uid(req.cookies.uid);
    req.user = user;

    return next();
  } catch (err) {
    res.status(401).json({ message: 'Usuário não autenticado' });
    return next(err);
  }
}

export const validateToken = (req, res, next) => {
  if (!req.user) {
    const error = new TypeError('Token inválido');

    res.status(401).json({ message: error.message });
    return next(error);
  }

  return next();
}

export const isAdmin = (req, res, next) => {
  try {
    isAdminMiddleware(req);
    return next();
  } catch (err) {
    res.status(401).json({ message: err.message })
    return next(err);
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
