import express from 'express';

// Controller que lidará com as requisições ao final
import * as controller from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', controller.authenticate);

export default {
  route: '/auth',
  router
};
