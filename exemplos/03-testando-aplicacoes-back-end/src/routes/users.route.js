import express from 'express';

// Middlewares de usuário
import middlewares, { isAdmin, validateBody } from '../middlewares/user.middleware.js';

// Controller que lidará com as requisições ao final
import * as controller from '../controllers/users.controller.js';

const router = express.Router();

// Aplica middlewares
router.use(middlewares);

router.get('/', controller.list);

export default {
  route: '/users',
  router
};
