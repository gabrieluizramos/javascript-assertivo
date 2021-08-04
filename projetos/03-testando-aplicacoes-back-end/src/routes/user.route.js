import express from 'express';

// Middlewares de usuário
import middlewares, { isAdmin, validateBody } from '../middlewares/user.middleware.js';

// Controller que lidará com as requisições ao final
import * as controller from '../controllers/user.controller.js';

const router = express.Router();

// Aplica middlewares
router.use(middlewares);

// Aplica rotas
router.get('/', controller.list);
router.post(
  '/',
  isAdmin,
  validateBody(['email', 'password', 'userName', 'name', 'lastName']),
  controller.create
);
router.patch('/', isAdmin, validateBody(['uid']), controller.update);
router.delete('/', isAdmin, validateBody(['uid']), controller.remove);

export default {
  route: '/user',
  router
};
