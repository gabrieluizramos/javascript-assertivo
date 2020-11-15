import express from 'express';

// Rotas
import auth from './auth.route.js';
import user from './user.route.js';
import users from './users.route.js';

// Aplica rotas
const router = express.Router();
router.use(auth.route, auth.router);
router.use(user.route, user.router);
router.use(users.route, users.router);

export default {
  route: '/api',
  router
};
