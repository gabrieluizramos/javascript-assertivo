import { createUser } from './user.js';

import logger from '../src/utils/logger.js';

const { uid, avatar, ...user } = createUser();

logger.success(
 `
  Usuário criado com sucesso! Basta copiar o código abaixo e colar no campo "data" da CLI: \n
  -------------------- \n
  '${JSON.stringify(user, null, 2)}'
  `
);
